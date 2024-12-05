import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  projectCardCollection?: Maybe<ProjectCardCollection>;
  projectImageCollection?: Maybe<ProjectImageCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsProjectCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsProjectImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/page) */
export type Page = Entry & _Node & {
  __typename: 'Page';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  pageContentCollection?: Maybe<PagePageContentCollection>;
  pageHero?: Maybe<PageHero>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/page) */
export type PageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/page) */
export type PageImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/page) */
export type PagePageContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PagePageContentFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/page) */
export type PagePageHeroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageHeroFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageCollection = {
  __typename: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageContent?: InputMaybe<CfpageContentMultiTypeNestedFilter>;
  pageContentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageHero?: InputMaybe<CfPageHeroNestedFilter>;
  pageHero_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/pageHero) */
export type PageHero = Entry & _Node & {
  __typename: 'PageHero';
  _id: Scalars['ID']['output'];
  afterText?: Maybe<Scalars['String']['output']>;
  beforeText?: Maybe<Scalars['String']['output']>;
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageHeroLinkingCollections>;
  mainText?: Maybe<Scalars['String']['output']>;
  projectImageListCollection?: Maybe<PageHeroProjectImageListCollection>;
  secondaryButtonLink?: Maybe<Scalars['String']['output']>;
  secondaryButtonText?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/pageHero) */
export type PageHeroAfterTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/pageHero) */
export type PageHeroBeforeTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/pageHero) */
export type PageHeroButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/pageHero) */
export type PageHeroButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/pageHero) */
export type PageHeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/pageHero) */
export type PageHeroMainTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/pageHero) */
export type PageHeroProjectImageListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageHeroProjectImageListCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectImageFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/pageHero) */
export type PageHeroSecondaryButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/pageHero) */
export type PageHeroSecondaryButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/pageHero) */
export type PageHeroTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageHeroCollection = {
  __typename: 'PageHeroCollection';
  items: Array<Maybe<PageHero>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageHeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageHeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageHeroFilter>>>;
  afterText?: InputMaybe<Scalars['String']['input']>;
  afterText_contains?: InputMaybe<Scalars['String']['input']>;
  afterText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  afterText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  afterText_not?: InputMaybe<Scalars['String']['input']>;
  afterText_not_contains?: InputMaybe<Scalars['String']['input']>;
  afterText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beforeText?: InputMaybe<Scalars['String']['input']>;
  beforeText_contains?: InputMaybe<Scalars['String']['input']>;
  beforeText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  beforeText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beforeText_not?: InputMaybe<Scalars['String']['input']>;
  beforeText_not_contains?: InputMaybe<Scalars['String']['input']>;
  beforeText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  mainText?: InputMaybe<Scalars['String']['input']>;
  mainText_contains?: InputMaybe<Scalars['String']['input']>;
  mainText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mainText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mainText_not?: InputMaybe<Scalars['String']['input']>;
  mainText_not_contains?: InputMaybe<Scalars['String']['input']>;
  mainText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectImageList?: InputMaybe<CfProjectImageNestedFilter>;
  projectImageListCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryButtonLink?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonLink_contains?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryButtonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  secondaryButtonLink_not?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  secondaryButtonText?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonText_contains?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryButtonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  secondaryButtonText_not?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageHeroLinkingCollections = {
  __typename: 'PageHeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type PageHeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageHeroLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageHeroLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageHeroLinkingCollectionsPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageHeroOrder {
  AfterTextAsc = 'afterText_ASC',
  AfterTextDesc = 'afterText_DESC',
  BeforeTextAsc = 'beforeText_ASC',
  BeforeTextDesc = 'beforeText_DESC',
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  MainTextAsc = 'mainText_ASC',
  MainTextDesc = 'mainText_DESC',
  SecondaryButtonLinkAsc = 'secondaryButtonLink_ASC',
  SecondaryButtonLinkDesc = 'secondaryButtonLink_DESC',
  SecondaryButtonTextAsc = 'secondaryButtonText_ASC',
  SecondaryButtonTextDesc = 'secondaryButtonText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type PageHeroProjectImageListCollection = {
  __typename: 'PageHeroProjectImageListCollection';
  items: Array<Maybe<ProjectImage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageHeroProjectImageListCollectionOrder {
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NewTabAsc = 'newTab_ASC',
  NewTabDesc = 'newTab_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageLinkingCollections = {
  __typename: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PagePageContentCollection = {
  __typename: 'PagePageContentCollection';
  items: Array<Maybe<PagePageContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PagePageContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<PagePageContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PagePageContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PagePageContentItem = ProjectDropdown | ProjectGrid | SectionHeader | Timeline;

/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectCard) */
export type ProjectCard = Entry & _Node & {
  __typename: 'ProjectCard';
  _id: Scalars['ID']['output'];
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ProjectCardLinkingCollections>;
  plainBody?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectCard) */
export type ProjectCardButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectCard) */
export type ProjectCardButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectCard) */
export type ProjectCardImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectCard) */
export type ProjectCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectCard) */
export type ProjectCardPlainBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectCard) */
export type ProjectCardTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectCard) */
export type ProjectCardTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectCardCollection = {
  __typename: 'ProjectCardCollection';
  items: Array<Maybe<ProjectCard>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProjectCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectCardFilter>>>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  plainBody?: InputMaybe<Scalars['String']['input']>;
  plainBody_contains?: InputMaybe<Scalars['String']['input']>;
  plainBody_exists?: InputMaybe<Scalars['Boolean']['input']>;
  plainBody_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  plainBody_not?: InputMaybe<Scalars['String']['input']>;
  plainBody_not_contains?: InputMaybe<Scalars['String']['input']>;
  plainBody_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectCardLinkingCollections = {
  __typename: 'ProjectCardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  projectGridCollection?: Maybe<ProjectGridCollection>;
};


export type ProjectCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectCardLinkingCollectionsProjectGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProjectCardLinkingCollectionsProjectGridCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProjectCardLinkingCollectionsProjectGridCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ProjectCardOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  PlainBodyAsc = 'plainBody_ASC',
  PlainBodyDesc = 'plainBody_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectDropdown) */
export type ProjectDropdown = Entry & _Node & {
  __typename: 'ProjectDropdown';
  _id: Scalars['ID']['output'];
  body?: Maybe<ProjectDropdownBody>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ProjectDropdownLinkingCollections>;
  projectListCollection?: Maybe<ProjectDropdownProjectListCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectDropdown) */
export type ProjectDropdownBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectDropdown) */
export type ProjectDropdownLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectDropdown) */
export type ProjectDropdownProjectListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectDropdown) */
export type ProjectDropdownTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectDropdownBody = {
  __typename: 'ProjectDropdownBody';
  json: Scalars['JSON']['output'];
  links: ProjectDropdownBodyLinks;
};

export type ProjectDropdownBodyAssets = {
  __typename: 'ProjectDropdownBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ProjectDropdownBodyEntries = {
  __typename: 'ProjectDropdownBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ProjectDropdownBodyLinks = {
  __typename: 'ProjectDropdownBodyLinks';
  assets: ProjectDropdownBodyAssets;
  entries: ProjectDropdownBodyEntries;
  resources: ProjectDropdownBodyResources;
};

export type ProjectDropdownBodyResources = {
  __typename: 'ProjectDropdownBodyResources';
  block: Array<ProjectDropdownBodyResourcesBlock>;
  hyperlink: Array<ProjectDropdownBodyResourcesHyperlink>;
  inline: Array<ProjectDropdownBodyResourcesInline>;
};

export type ProjectDropdownBodyResourcesBlock = ResourceLink & {
  __typename: 'ProjectDropdownBodyResourcesBlock';
  sys: ResourceSys;
};

export type ProjectDropdownBodyResourcesHyperlink = ResourceLink & {
  __typename: 'ProjectDropdownBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ProjectDropdownBodyResourcesInline = ResourceLink & {
  __typename: 'ProjectDropdownBodyResourcesInline';
  sys: ResourceSys;
};

export type ProjectDropdownCollection = {
  __typename: 'ProjectDropdownCollection';
  items: Array<Maybe<ProjectDropdown>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProjectDropdownFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectDropdownFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectDropdownFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  projectListCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectDropdownLinkingCollections = {
  __typename: 'ProjectDropdownLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ProjectDropdownLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectDropdownLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProjectDropdownLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProjectDropdownLinkingCollectionsPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ProjectDropdownOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ProjectDropdownProjectListCollection = {
  __typename: 'ProjectDropdownProjectListCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectGrid) */
export type ProjectGrid = Entry & _Node & {
  __typename: 'ProjectGrid';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ProjectGridLinkingCollections>;
  projectListCollection?: Maybe<ProjectGridProjectListCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectGrid) */
export type ProjectGridLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectGrid) */
export type ProjectGridProjectListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProjectGridProjectListCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectCardFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectGrid) */
export type ProjectGridTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectGrid) */
export type ProjectGridTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectGridCollection = {
  __typename: 'ProjectGridCollection';
  items: Array<Maybe<ProjectGrid>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProjectGridFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectGridFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectGridFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  projectList?: InputMaybe<CfProjectCardNestedFilter>;
  projectListCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectGridLinkingCollections = {
  __typename: 'ProjectGridLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ProjectGridLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectGridLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProjectGridLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProjectGridLinkingCollectionsPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ProjectGridOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type ProjectGridProjectListCollection = {
  __typename: 'ProjectGridProjectListCollection';
  items: Array<Maybe<ProjectCard>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ProjectGridProjectListCollectionOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  PlainBodyAsc = 'plainBody_ASC',
  PlainBodyDesc = 'plainBody_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectImage) */
export type ProjectImage = Entry & _Node & {
  __typename: 'ProjectImage';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  link?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ProjectImageLinkingCollections>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectImage) */
export type ProjectImageImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectImage) */
export type ProjectImageLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectImage) */
export type ProjectImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectImage) */
export type ProjectImageNewTabArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/projectImage) */
export type ProjectImageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectImageCollection = {
  __typename: 'ProjectImageCollection';
  items: Array<Maybe<ProjectImage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProjectImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectImageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  newTab_exists?: InputMaybe<Scalars['Boolean']['input']>;
  newTab_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectImageLinkingCollections = {
  __typename: 'ProjectImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHeroCollection?: Maybe<PageHeroCollection>;
};


export type ProjectImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectImageLinkingCollectionsPageHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProjectImageLinkingCollectionsPageHeroCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProjectImageLinkingCollectionsPageHeroCollectionOrder {
  AfterTextAsc = 'afterText_ASC',
  AfterTextDesc = 'afterText_DESC',
  BeforeTextAsc = 'beforeText_ASC',
  BeforeTextDesc = 'beforeText_DESC',
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  MainTextAsc = 'mainText_ASC',
  MainTextDesc = 'mainText_DESC',
  SecondaryButtonLinkAsc = 'secondaryButtonLink_ASC',
  SecondaryButtonLinkDesc = 'secondaryButtonLink_DESC',
  SecondaryButtonTextAsc = 'secondaryButtonText_ASC',
  SecondaryButtonTextDesc = 'secondaryButtonText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ProjectImageOrder {
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NewTabAsc = 'newTab_ASC',
  NewTabDesc = 'newTab_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  pageHero?: Maybe<PageHero>;
  pageHeroCollection?: Maybe<PageHeroCollection>;
  projectCard?: Maybe<ProjectCard>;
  projectCardCollection?: Maybe<ProjectCardCollection>;
  projectDropdown?: Maybe<ProjectDropdown>;
  projectDropdownCollection?: Maybe<ProjectDropdownCollection>;
  projectGrid?: Maybe<ProjectGrid>;
  projectGridCollection?: Maybe<ProjectGridCollection>;
  projectImage?: Maybe<ProjectImage>;
  projectImageCollection?: Maybe<ProjectImageCollection>;
  sectionHeader?: Maybe<SectionHeader>;
  sectionHeaderCollection?: Maybe<SectionHeaderCollection>;
  timeline?: Maybe<Timeline>;
  timelineCollection?: Maybe<TimelineCollection>;
  timelineItem?: Maybe<TimelineItem>;
  timelineItemCollection?: Maybe<TimelineItemCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryPageHeroArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageHeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageHeroFilter>;
};


export type QueryProjectCardArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProjectCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProjectCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectCardFilter>;
};


export type QueryProjectDropdownArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProjectDropdownCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProjectDropdownOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectDropdownFilter>;
};


export type QueryProjectGridArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProjectGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProjectGridOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectGridFilter>;
};


export type QueryProjectImageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProjectImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProjectImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectImageFilter>;
};


export type QuerySectionHeaderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySectionHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionHeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SectionHeaderFilter>;
};


export type QueryTimelineArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTimelineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TimelineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimelineFilter>;
};


export type QueryTimelineItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTimelineItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TimelineItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimelineItemFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/sectionHeader) */
export type SectionHeader = Entry & _Node & {
  __typename: 'SectionHeader';
  _id: Scalars['ID']['output'];
  body?: Maybe<SectionHeaderBody>;
  buttonLink?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SectionHeaderLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/sectionHeader) */
export type SectionHeaderBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/sectionHeader) */
export type SectionHeaderButtonLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/sectionHeader) */
export type SectionHeaderButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/sectionHeader) */
export type SectionHeaderColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/sectionHeader) */
export type SectionHeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/sectionHeader) */
export type SectionHeaderTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SectionHeaderBody = {
  __typename: 'SectionHeaderBody';
  json: Scalars['JSON']['output'];
  links: SectionHeaderBodyLinks;
};

export type SectionHeaderBodyAssets = {
  __typename: 'SectionHeaderBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SectionHeaderBodyEntries = {
  __typename: 'SectionHeaderBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SectionHeaderBodyLinks = {
  __typename: 'SectionHeaderBodyLinks';
  assets: SectionHeaderBodyAssets;
  entries: SectionHeaderBodyEntries;
  resources: SectionHeaderBodyResources;
};

export type SectionHeaderBodyResources = {
  __typename: 'SectionHeaderBodyResources';
  block: Array<SectionHeaderBodyResourcesBlock>;
  hyperlink: Array<SectionHeaderBodyResourcesHyperlink>;
  inline: Array<SectionHeaderBodyResourcesInline>;
};

export type SectionHeaderBodyResourcesBlock = ResourceLink & {
  __typename: 'SectionHeaderBodyResourcesBlock';
  sys: ResourceSys;
};

export type SectionHeaderBodyResourcesHyperlink = ResourceLink & {
  __typename: 'SectionHeaderBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type SectionHeaderBodyResourcesInline = ResourceLink & {
  __typename: 'SectionHeaderBodyResourcesInline';
  sys: ResourceSys;
};

export type SectionHeaderCollection = {
  __typename: 'SectionHeaderCollection';
  items: Array<Maybe<SectionHeader>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SectionHeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<SectionHeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SectionHeaderFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_contains?: InputMaybe<Scalars['String']['input']>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_not?: InputMaybe<Scalars['String']['input']>;
  color_not_contains?: InputMaybe<Scalars['String']['input']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SectionHeaderLinkingCollections = {
  __typename: 'SectionHeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type SectionHeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SectionHeaderLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SectionHeaderLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SectionHeaderLinkingCollectionsPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SectionHeaderOrder {
  ButtonLinkAsc = 'buttonLink_ASC',
  ButtonLinkDesc = 'buttonLink_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/timeline) */
export type Timeline = Entry & _Node & {
  __typename: 'Timeline';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TimelineLinkingCollections>;
  sys: Sys;
  timelineItemsListCollection?: Maybe<TimelineTimelineItemsListCollection>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/timeline) */
export type TimelineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/timeline) */
export type TimelineTimelineItemsListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TimelineTimelineItemsListCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimelineItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/timeline) */
export type TimelineTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineCollection = {
  __typename: 'TimelineCollection';
  items: Array<Maybe<Timeline>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TimelineFilter = {
  AND?: InputMaybe<Array<InputMaybe<TimelineFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TimelineFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  timelineItemsList?: InputMaybe<CfTimelineItemNestedFilter>;
  timelineItemsListCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/timelineItem) */
export type TimelineItem = Entry & _Node & {
  __typename: 'TimelineItem';
  _id: Scalars['ID']['output'];
  body?: Maybe<TimelineItemBody>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TimelineItemLinkingCollections>;
  quote?: Maybe<Scalars['String']['output']>;
  quoteAttribution?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/timelineItem) */
export type TimelineItemBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/timelineItem) */
export type TimelineItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/timelineItem) */
export type TimelineItemQuoteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/timelineItem) */
export type TimelineItemQuoteAttributionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/timelineItem) */
export type TimelineItemTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/vvji94wwc94s/content_types/timelineItem) */
export type TimelineItemYearArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineItemBody = {
  __typename: 'TimelineItemBody';
  json: Scalars['JSON']['output'];
  links: TimelineItemBodyLinks;
};

export type TimelineItemBodyAssets = {
  __typename: 'TimelineItemBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TimelineItemBodyEntries = {
  __typename: 'TimelineItemBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TimelineItemBodyLinks = {
  __typename: 'TimelineItemBodyLinks';
  assets: TimelineItemBodyAssets;
  entries: TimelineItemBodyEntries;
  resources: TimelineItemBodyResources;
};

export type TimelineItemBodyResources = {
  __typename: 'TimelineItemBodyResources';
  block: Array<TimelineItemBodyResourcesBlock>;
  hyperlink: Array<TimelineItemBodyResourcesHyperlink>;
  inline: Array<TimelineItemBodyResourcesInline>;
};

export type TimelineItemBodyResourcesBlock = ResourceLink & {
  __typename: 'TimelineItemBodyResourcesBlock';
  sys: ResourceSys;
};

export type TimelineItemBodyResourcesHyperlink = ResourceLink & {
  __typename: 'TimelineItemBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type TimelineItemBodyResourcesInline = ResourceLink & {
  __typename: 'TimelineItemBodyResourcesInline';
  sys: ResourceSys;
};

export type TimelineItemCollection = {
  __typename: 'TimelineItemCollection';
  items: Array<Maybe<TimelineItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TimelineItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<TimelineItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TimelineItemFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quoteAttribution?: InputMaybe<Scalars['String']['input']>;
  quoteAttribution_contains?: InputMaybe<Scalars['String']['input']>;
  quoteAttribution_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quoteAttribution_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quoteAttribution_not?: InputMaybe<Scalars['String']['input']>;
  quoteAttribution_not_contains?: InputMaybe<Scalars['String']['input']>;
  quoteAttribution_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote_not?: InputMaybe<Scalars['String']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  year?: InputMaybe<Scalars['String']['input']>;
  year_contains?: InputMaybe<Scalars['String']['input']>;
  year_exists?: InputMaybe<Scalars['Boolean']['input']>;
  year_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  year_not?: InputMaybe<Scalars['String']['input']>;
  year_not_contains?: InputMaybe<Scalars['String']['input']>;
  year_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TimelineItemLinkingCollections = {
  __typename: 'TimelineItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  timelineCollection?: Maybe<TimelineCollection>;
};


export type TimelineItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TimelineItemLinkingCollectionsTimelineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TimelineItemLinkingCollectionsTimelineCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TimelineItemLinkingCollectionsTimelineCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TimelineItemOrder {
  QuoteAttributionAsc = 'quoteAttribution_ASC',
  QuoteAttributionDesc = 'quoteAttribution_DESC',
  QuoteAsc = 'quote_ASC',
  QuoteDesc = 'quote_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC'
}

export type TimelineLinkingCollections = {
  __typename: 'TimelineLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type TimelineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TimelineLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TimelineLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TimelineLinkingCollectionsPageCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TimelineOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TimelineTimelineItemsListCollection = {
  __typename: 'TimelineTimelineItemsListCollection';
  items: Array<Maybe<TimelineItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TimelineTimelineItemsListCollectionOrder {
  QuoteAttributionAsc = 'quoteAttribution_ASC',
  QuoteAttributionDesc = 'quoteAttribution_DESC',
  QuoteAsc = 'quote_ASC',
  QuoteDesc = 'quote_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfPageHeroNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageHeroNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageHeroNestedFilter>>>;
  afterText?: InputMaybe<Scalars['String']['input']>;
  afterText_contains?: InputMaybe<Scalars['String']['input']>;
  afterText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  afterText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  afterText_not?: InputMaybe<Scalars['String']['input']>;
  afterText_not_contains?: InputMaybe<Scalars['String']['input']>;
  afterText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beforeText?: InputMaybe<Scalars['String']['input']>;
  beforeText_contains?: InputMaybe<Scalars['String']['input']>;
  beforeText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  beforeText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beforeText_not?: InputMaybe<Scalars['String']['input']>;
  beforeText_not_contains?: InputMaybe<Scalars['String']['input']>;
  beforeText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  mainText?: InputMaybe<Scalars['String']['input']>;
  mainText_contains?: InputMaybe<Scalars['String']['input']>;
  mainText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mainText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mainText_not?: InputMaybe<Scalars['String']['input']>;
  mainText_not_contains?: InputMaybe<Scalars['String']['input']>;
  mainText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  projectImageListCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryButtonLink?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonLink_contains?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryButtonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  secondaryButtonLink_not?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  secondaryButtonText?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonText_contains?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryButtonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  secondaryButtonText_not?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  secondaryButtonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfProjectCardNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfProjectCardNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfProjectCardNestedFilter>>>;
  buttonLink?: InputMaybe<Scalars['String']['input']>;
  buttonLink_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonLink_not?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonText_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  buttonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonText_not?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  buttonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  plainBody?: InputMaybe<Scalars['String']['input']>;
  plainBody_contains?: InputMaybe<Scalars['String']['input']>;
  plainBody_exists?: InputMaybe<Scalars['Boolean']['input']>;
  plainBody_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  plainBody_not?: InputMaybe<Scalars['String']['input']>;
  plainBody_not_contains?: InputMaybe<Scalars['String']['input']>;
  plainBody_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfProjectImageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfProjectImageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfProjectImageNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  newTab_exists?: InputMaybe<Scalars['Boolean']['input']>;
  newTab_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTimelineItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTimelineItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTimelineItemNestedFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quoteAttribution?: InputMaybe<Scalars['String']['input']>;
  quoteAttribution_contains?: InputMaybe<Scalars['String']['input']>;
  quoteAttribution_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quoteAttribution_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quoteAttribution_not?: InputMaybe<Scalars['String']['input']>;
  quoteAttribution_not_contains?: InputMaybe<Scalars['String']['input']>;
  quoteAttribution_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote_not?: InputMaybe<Scalars['String']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  year?: InputMaybe<Scalars['String']['input']>;
  year_contains?: InputMaybe<Scalars['String']['input']>;
  year_exists?: InputMaybe<Scalars['Boolean']['input']>;
  year_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  year_not?: InputMaybe<Scalars['String']['input']>;
  year_not_contains?: InputMaybe<Scalars['String']['input']>;
  year_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfpageContentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfpageContentMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfpageContentMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageQuery = { __typename: 'Query', pageCollection?: { __typename: 'PageCollection', items: Array<{ __typename: 'Page', title?: string | null, slug?: string | null, description?: string | null, sys: { __typename: 'Sys', id: string }, image?: { __typename: 'Asset', title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, contentType?: string | null, sys: { __typename: 'Sys', id: string } } | null, pageHero?: { __typename: 'PageHero', type?: string | null, beforeText?: string | null, mainText?: string | null, afterText?: string | null, buttonText?: string | null, buttonLink?: string | null, secondaryButtonText?: string | null, secondaryButtonLink?: string | null, sys: { __typename: 'Sys', id: string }, projectImageListCollection?: { __typename: 'PageHeroProjectImageListCollection', items: Array<{ __typename: 'ProjectImage', title?: string | null, link?: string | null, newTab?: boolean | null, sys: { __typename: 'Sys', id: string }, image?: { __typename: 'Asset', title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, contentType?: string | null, sys: { __typename: 'Sys', id: string } } | null } | null> } | null } | null, pageContentCollection?: { __typename: 'PagePageContentCollection', items: Array<{ __typename: 'ProjectDropdown' } | { __typename: 'ProjectGrid', type?: string | null, sys: { __typename: 'Sys', id: string }, projectListCollection?: { __typename: 'ProjectGridProjectListCollection', items: Array<{ __typename: 'ProjectCard', title?: string | null, plainBody?: string | null, type?: string | null, buttonText?: string | null, buttonLink?: string | null, sys: { __typename: 'Sys', id: string } } | null> } | null } | { __typename: 'SectionHeader', title?: string | null, buttonText?: string | null, buttonLink?: string | null, color?: string | null, sys: { __typename: 'Sys', id: string }, body?: { __typename: 'SectionHeaderBody', json: any } | null } | { __typename: 'Timeline' } | null> } | null } | null> } | null };

export const ImageFieldsFragmentDoc = gql`
    fragment ImageFields on Asset {
  __typename
  sys {
    id
  }
  title
  description
  width
  height
  url
  contentType
}
    `;
export const ProjectImageFieldsFragmentDoc = gql`
    fragment ProjectImageFields on ProjectImage {
  __typename
  sys {
    id
  }
  title
  link
  image {
    ...ImageFields
  }
  newTab
}
    `;
export const PageHeroFieldsFragmentDoc = gql`
    fragment PageHeroFields on PageHero {
  __typename
  sys {
    id
  }
  type
  beforeText
  mainText
  afterText
  buttonText
  buttonLink
  secondaryButtonText
  secondaryButtonLink
  projectImageListCollection {
    items {
      ...ProjectImageFields
    }
  }
}
    `;
export const ProjectCardFieldsFragmentDoc = gql`
    fragment ProjectCardFields on ProjectCard {
  __typename
  sys {
    id
  }
  title
  plainBody
  type
  buttonText
  buttonLink
}
    `;
export const ProjectGridFieldsFragmentDoc = gql`
    fragment ProjectGridFields on ProjectGrid {
  __typename
  sys {
    id
  }
  type
  projectListCollection {
    items {
      ...ProjectCardFields
    }
  }
}
    `;
export const SectionHeaderFieldsFragmentDoc = gql`
    fragment SectionHeaderFields on SectionHeader {
  sys {
    id
  }
  title
  body {
    json
  }
  buttonText
  buttonLink
  color
}
    `;
export const PageFieldsFragmentDoc = gql`
    fragment PageFields on Page {
  __typename
  sys {
    id
  }
  title
  slug
  description
  image {
    ...ImageFields
  }
  pageHero {
    ...PageHeroFields
  }
  pageContentCollection {
    items {
      __typename
      ... on ProjectGrid {
        ...ProjectGridFields
      }
      ... on SectionHeader {
        ...SectionHeaderFields
      }
    }
  }
}
    `;
export const PageDocument = gql`
    query Page($slug: String!, $locale: String, $preview: Boolean) {
  pageCollection(
    limit: 1
    where: {slug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      ...PageFields
    }
  }
}
    ${PageFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${PageHeroFieldsFragmentDoc}
${ProjectImageFieldsFragmentDoc}
${ProjectGridFieldsFragmentDoc}
${ProjectCardFieldsFragmentDoc}
${SectionHeaderFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Page(variables: PageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageQuery>(PageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Page', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;