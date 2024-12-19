"use client";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-6",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-12",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-screen relative flex justify-center w-full overflow-hidden -mt-[80px]",
        className
      )}
    >
      <div className="absolute top-0 right-0 flex flex-1 w-1/2 h-full dark:bg-dot-white/[0.5] bg-dot-black/[0.5] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>

      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      <div className="w-full mt-[80px]">{children}</div>

      <motion.div
        animate={{
          y: [-3, 3],
          transition: {
            type: "spring",
            bounce: 0.5,
            damping: 0,
            mass: 80,
          },
        }}
        className="w-fit absolute bottom-20 lg:bottom-10"
      >
        <ChevronDownDots />
      </motion.div>
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none border-b dark:border-white/[0.2] border-black"
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef, parentRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-blue-base to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-blue-base to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-blue-base"
        />
      ))}
    </div>
  );
};

const ChevronDownDots = () => {
  return (
    <svg
      width="26"
      height="12"
      viewBox="0 0 26 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0636 10.1051C12.0463 10.2366 12.082 10.3695 12.1627 10.4747C12.2434 10.5799 12.3626 10.6488 12.4941 10.6661C12.6256 10.6834 12.7585 10.6478 12.8637 10.567C12.969 10.4863 13.0378 10.3671 13.0551 10.2356C13.0724 10.1041 13.0368 9.97118 12.956 9.86598C12.8753 9.76077 12.7561 9.69195 12.6246 9.67464C12.4932 9.65733 12.3602 9.69296 12.255 9.77368C12.1498 9.85441 12.081 9.97362 12.0636 10.1051Z"
        className="fill-black dark:fill-white stroke-black dark:stroke-white stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.673 5.80041C17.6557 5.93188 17.6913 6.06485 17.7721 6.17005C17.8528 6.27526 17.972 6.34409 18.1035 6.3614C18.235 6.3787 18.3679 6.34308 18.4731 6.26235C18.5783 6.18162 18.6472 6.06241 18.6645 5.93094C18.6818 5.79946 18.6461 5.6665 18.5654 5.56129C18.4847 5.45609 18.3655 5.38726 18.234 5.36995C18.1025 5.35264 17.9696 5.38827 17.8644 5.469C17.7592 5.54972 17.6903 5.66894 17.673 5.80041Z"
        className="fill-black dark:fill-white stroke-black dark:stroke-white stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.2824 1.49572C23.2651 1.6272 23.3007 1.76016 23.3814 1.86537C23.4622 1.97057 23.5814 2.0394 23.7129 2.05671C23.8443 2.07402 23.9773 2.03839 24.0825 1.95766C24.1877 1.87694 24.2565 1.75772 24.2738 1.62625C24.2911 1.49477 24.2555 1.36181 24.1748 1.2566C24.0941 1.1514 23.9749 1.08257 23.8434 1.06526C23.7119 1.04795 23.5789 1.08358 23.4737 1.16431C23.3685 1.24504 23.2997 1.36425 23.2824 1.49572Z"
        className="fill-black dark:fill-white stroke-black dark:stroke-white stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.06526 1.62658C1.08257 1.75806 1.1514 1.87727 1.2566 1.958C1.36181 2.03872 1.49477 2.07435 1.62625 2.05704C1.75772 2.03973 1.87694 1.9709 1.95766 1.8657C2.03839 1.76049 2.07402 1.62753 2.05671 1.49606C2.0394 1.36458 1.97057 1.24537 1.86537 1.16464C1.76016 1.08392 1.6272 1.04829 1.49572 1.0656C1.36425 1.08291 1.24504 1.15173 1.16431 1.25694C1.08358 1.36214 1.04795 1.49511 1.06526 1.62658Z"
        className="fill-black dark:fill-white stroke-black dark:stroke-white stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.67464 5.93127C6.69195 6.06274 6.76077 6.18196 6.86598 6.26268C6.97119 6.34341 7.10415 6.37904 7.23562 6.36173C7.3671 6.34442 7.48631 6.27559 7.56704 6.17039C7.64776 6.06518 7.68339 5.93222 7.66608 5.80074C7.64877 5.66927 7.57995 5.55006 7.47474 5.46933C7.36954 5.3886 7.23657 5.35297 7.1051 5.37028C6.97362 5.38759 6.85441 5.45642 6.77368 5.56163C6.69296 5.66683 6.65733 5.7998 6.67464 5.93127Z"
        className="fill-black dark:fill-white stroke-black dark:stroke-white stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2879 10.236C12.3052 10.3674 12.3741 10.4866 12.4793 10.5674C12.5845 10.6481 12.7174 10.6837 12.8489 10.6664C12.9804 10.6491 13.0996 10.5803 13.1803 10.4751C13.261 10.3699 13.2967 10.2369 13.2794 10.1054C13.2621 9.97396 13.1932 9.85474 13.088 9.77402C12.9828 9.69329 12.8499 9.65766 12.7184 9.67497C12.5869 9.69228 12.4677 9.76111 12.387 9.86631C12.3062 9.97152 12.2706 10.1045 12.2879 10.236Z"
        className="fill-black dark:fill-white stroke-black dark:stroke-white stroke-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
