export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type AstronautsJson = Node & {
  __typename?: 'AstronautsJson';
  children: Array<Node>;
  desc?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<File>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  url?: Maybe<Scalars['String']>;
};

export type AstronautsJsonConnection = {
  __typename?: 'AstronautsJsonConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<AstronautsJsonEdge>;
  group: Array<AstronautsJsonGroupConnection>;
  nodes: Array<AstronautsJson>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type AstronautsJsonConnectionDistinctArgs = {
  field: AstronautsJsonFieldsEnum;
};


export type AstronautsJsonConnectionGroupArgs = {
  field: AstronautsJsonFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type AstronautsJsonEdge = {
  __typename?: 'AstronautsJsonEdge';
  next?: Maybe<AstronautsJson>;
  node: AstronautsJson;
  previous?: Maybe<AstronautsJson>;
};

export enum AstronautsJsonFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Desc = 'desc',
  Id = 'id',
  ImageAbsolutePath = 'image___absolutePath',
  ImageAccessTime = 'image___accessTime',
  ImageAtime = 'image___atime',
  ImageAtimeMs = 'image___atimeMs',
  ImageBase = 'image___base',
  ImageBirthTime = 'image___birthTime',
  ImageBirthtime = 'image___birthtime',
  ImageBirthtimeMs = 'image___birthtimeMs',
  ImageBlksize = 'image___blksize',
  ImageBlocks = 'image___blocks',
  ImageChangeTime = 'image___changeTime',
  ImageChildAstronautsJsonChildren = 'image___childAstronautsJson___children',
  ImageChildAstronautsJsonChildrenChildren = 'image___childAstronautsJson___children___children',
  ImageChildAstronautsJsonChildrenId = 'image___childAstronautsJson___children___id',
  ImageChildAstronautsJsonDesc = 'image___childAstronautsJson___desc',
  ImageChildAstronautsJsonId = 'image___childAstronautsJson___id',
  ImageChildAstronautsJsonImageAbsolutePath = 'image___childAstronautsJson___image___absolutePath',
  ImageChildAstronautsJsonImageAccessTime = 'image___childAstronautsJson___image___accessTime',
  ImageChildAstronautsJsonImageAtime = 'image___childAstronautsJson___image___atime',
  ImageChildAstronautsJsonImageAtimeMs = 'image___childAstronautsJson___image___atimeMs',
  ImageChildAstronautsJsonImageBase = 'image___childAstronautsJson___image___base',
  ImageChildAstronautsJsonImageBirthTime = 'image___childAstronautsJson___image___birthTime',
  ImageChildAstronautsJsonImageBirthtime = 'image___childAstronautsJson___image___birthtime',
  ImageChildAstronautsJsonImageBirthtimeMs = 'image___childAstronautsJson___image___birthtimeMs',
  ImageChildAstronautsJsonImageBlksize = 'image___childAstronautsJson___image___blksize',
  ImageChildAstronautsJsonImageBlocks = 'image___childAstronautsJson___image___blocks',
  ImageChildAstronautsJsonImageChangeTime = 'image___childAstronautsJson___image___changeTime',
  ImageChildAstronautsJsonImageChildren = 'image___childAstronautsJson___image___children',
  ImageChildAstronautsJsonImageChildrenAstronautsJson = 'image___childAstronautsJson___image___childrenAstronautsJson',
  ImageChildAstronautsJsonImageChildrenImageSharp = 'image___childAstronautsJson___image___childrenImageSharp',
  ImageChildAstronautsJsonImageChildrenMarkdownRemark = 'image___childAstronautsJson___image___childrenMarkdownRemark',
  ImageChildAstronautsJsonImageCtime = 'image___childAstronautsJson___image___ctime',
  ImageChildAstronautsJsonImageCtimeMs = 'image___childAstronautsJson___image___ctimeMs',
  ImageChildAstronautsJsonImageDev = 'image___childAstronautsJson___image___dev',
  ImageChildAstronautsJsonImageDir = 'image___childAstronautsJson___image___dir',
  ImageChildAstronautsJsonImageExt = 'image___childAstronautsJson___image___ext',
  ImageChildAstronautsJsonImageExtension = 'image___childAstronautsJson___image___extension',
  ImageChildAstronautsJsonImageGid = 'image___childAstronautsJson___image___gid',
  ImageChildAstronautsJsonImageId = 'image___childAstronautsJson___image___id',
  ImageChildAstronautsJsonImageIno = 'image___childAstronautsJson___image___ino',
  ImageChildAstronautsJsonImageMode = 'image___childAstronautsJson___image___mode',
  ImageChildAstronautsJsonImageModifiedTime = 'image___childAstronautsJson___image___modifiedTime',
  ImageChildAstronautsJsonImageMtime = 'image___childAstronautsJson___image___mtime',
  ImageChildAstronautsJsonImageMtimeMs = 'image___childAstronautsJson___image___mtimeMs',
  ImageChildAstronautsJsonImageName = 'image___childAstronautsJson___image___name',
  ImageChildAstronautsJsonImageNlink = 'image___childAstronautsJson___image___nlink',
  ImageChildAstronautsJsonImagePrettySize = 'image___childAstronautsJson___image___prettySize',
  ImageChildAstronautsJsonImagePublicUrl = 'image___childAstronautsJson___image___publicURL',
  ImageChildAstronautsJsonImageRdev = 'image___childAstronautsJson___image___rdev',
  ImageChildAstronautsJsonImageRelativeDirectory = 'image___childAstronautsJson___image___relativeDirectory',
  ImageChildAstronautsJsonImageRelativePath = 'image___childAstronautsJson___image___relativePath',
  ImageChildAstronautsJsonImageRoot = 'image___childAstronautsJson___image___root',
  ImageChildAstronautsJsonImageSize = 'image___childAstronautsJson___image___size',
  ImageChildAstronautsJsonImageSourceInstanceName = 'image___childAstronautsJson___image___sourceInstanceName',
  ImageChildAstronautsJsonImageUid = 'image___childAstronautsJson___image___uid',
  ImageChildAstronautsJsonInternalContent = 'image___childAstronautsJson___internal___content',
  ImageChildAstronautsJsonInternalContentDigest = 'image___childAstronautsJson___internal___contentDigest',
  ImageChildAstronautsJsonInternalDescription = 'image___childAstronautsJson___internal___description',
  ImageChildAstronautsJsonInternalFieldOwners = 'image___childAstronautsJson___internal___fieldOwners',
  ImageChildAstronautsJsonInternalIgnoreType = 'image___childAstronautsJson___internal___ignoreType',
  ImageChildAstronautsJsonInternalMediaType = 'image___childAstronautsJson___internal___mediaType',
  ImageChildAstronautsJsonInternalOwner = 'image___childAstronautsJson___internal___owner',
  ImageChildAstronautsJsonInternalType = 'image___childAstronautsJson___internal___type',
  ImageChildAstronautsJsonName = 'image___childAstronautsJson___name',
  ImageChildAstronautsJsonParentChildren = 'image___childAstronautsJson___parent___children',
  ImageChildAstronautsJsonParentId = 'image___childAstronautsJson___parent___id',
  ImageChildAstronautsJsonUrl = 'image___childAstronautsJson___url',
  ImageChildImageSharpChildren = 'image___childImageSharp___children',
  ImageChildImageSharpChildrenChildren = 'image___childImageSharp___children___children',
  ImageChildImageSharpChildrenId = 'image___childImageSharp___children___id',
  ImageChildImageSharpFixedAspectRatio = 'image___childImageSharp___fixed___aspectRatio',
  ImageChildImageSharpFixedBase64 = 'image___childImageSharp___fixed___base64',
  ImageChildImageSharpFixedHeight = 'image___childImageSharp___fixed___height',
  ImageChildImageSharpFixedOriginalName = 'image___childImageSharp___fixed___originalName',
  ImageChildImageSharpFixedSrc = 'image___childImageSharp___fixed___src',
  ImageChildImageSharpFixedSrcSet = 'image___childImageSharp___fixed___srcSet',
  ImageChildImageSharpFixedSrcSetWebp = 'image___childImageSharp___fixed___srcSetWebp',
  ImageChildImageSharpFixedSrcWebp = 'image___childImageSharp___fixed___srcWebp',
  ImageChildImageSharpFixedTracedSvg = 'image___childImageSharp___fixed___tracedSVG',
  ImageChildImageSharpFixedWidth = 'image___childImageSharp___fixed___width',
  ImageChildImageSharpFluidAspectRatio = 'image___childImageSharp___fluid___aspectRatio',
  ImageChildImageSharpFluidBase64 = 'image___childImageSharp___fluid___base64',
  ImageChildImageSharpFluidOriginalImg = 'image___childImageSharp___fluid___originalImg',
  ImageChildImageSharpFluidOriginalName = 'image___childImageSharp___fluid___originalName',
  ImageChildImageSharpFluidPresentationHeight = 'image___childImageSharp___fluid___presentationHeight',
  ImageChildImageSharpFluidPresentationWidth = 'image___childImageSharp___fluid___presentationWidth',
  ImageChildImageSharpFluidSizes = 'image___childImageSharp___fluid___sizes',
  ImageChildImageSharpFluidSrc = 'image___childImageSharp___fluid___src',
  ImageChildImageSharpFluidSrcSet = 'image___childImageSharp___fluid___srcSet',
  ImageChildImageSharpFluidSrcSetWebp = 'image___childImageSharp___fluid___srcSetWebp',
  ImageChildImageSharpFluidSrcWebp = 'image___childImageSharp___fluid___srcWebp',
  ImageChildImageSharpFluidTracedSvg = 'image___childImageSharp___fluid___tracedSVG',
  ImageChildImageSharpGatsbyImageData = 'image___childImageSharp___gatsbyImageData',
  ImageChildImageSharpId = 'image___childImageSharp___id',
  ImageChildImageSharpInternalContent = 'image___childImageSharp___internal___content',
  ImageChildImageSharpInternalContentDigest = 'image___childImageSharp___internal___contentDigest',
  ImageChildImageSharpInternalDescription = 'image___childImageSharp___internal___description',
  ImageChildImageSharpInternalFieldOwners = 'image___childImageSharp___internal___fieldOwners',
  ImageChildImageSharpInternalIgnoreType = 'image___childImageSharp___internal___ignoreType',
  ImageChildImageSharpInternalMediaType = 'image___childImageSharp___internal___mediaType',
  ImageChildImageSharpInternalOwner = 'image___childImageSharp___internal___owner',
  ImageChildImageSharpInternalType = 'image___childImageSharp___internal___type',
  ImageChildImageSharpOriginalHeight = 'image___childImageSharp___original___height',
  ImageChildImageSharpOriginalSrc = 'image___childImageSharp___original___src',
  ImageChildImageSharpOriginalWidth = 'image___childImageSharp___original___width',
  ImageChildImageSharpParentChildren = 'image___childImageSharp___parent___children',
  ImageChildImageSharpParentId = 'image___childImageSharp___parent___id',
  ImageChildImageSharpResizeAspectRatio = 'image___childImageSharp___resize___aspectRatio',
  ImageChildImageSharpResizeHeight = 'image___childImageSharp___resize___height',
  ImageChildImageSharpResizeOriginalName = 'image___childImageSharp___resize___originalName',
  ImageChildImageSharpResizeSrc = 'image___childImageSharp___resize___src',
  ImageChildImageSharpResizeTracedSvg = 'image___childImageSharp___resize___tracedSVG',
  ImageChildImageSharpResizeWidth = 'image___childImageSharp___resize___width',
  ImageChildMarkdownRemarkChildren = 'image___childMarkdownRemark___children',
  ImageChildMarkdownRemarkChildrenChildren = 'image___childMarkdownRemark___children___children',
  ImageChildMarkdownRemarkChildrenId = 'image___childMarkdownRemark___children___id',
  ImageChildMarkdownRemarkExcerpt = 'image___childMarkdownRemark___excerpt',
  ImageChildMarkdownRemarkExcerptAst = 'image___childMarkdownRemark___excerptAst',
  ImageChildMarkdownRemarkFileAbsolutePath = 'image___childMarkdownRemark___fileAbsolutePath',
  ImageChildMarkdownRemarkFrontmatterTitle = 'image___childMarkdownRemark___frontmatter___title',
  ImageChildMarkdownRemarkHeadings = 'image___childMarkdownRemark___headings',
  ImageChildMarkdownRemarkHeadingsDepth = 'image___childMarkdownRemark___headings___depth',
  ImageChildMarkdownRemarkHeadingsId = 'image___childMarkdownRemark___headings___id',
  ImageChildMarkdownRemarkHeadingsValue = 'image___childMarkdownRemark___headings___value',
  ImageChildMarkdownRemarkHtml = 'image___childMarkdownRemark___html',
  ImageChildMarkdownRemarkHtmlAst = 'image___childMarkdownRemark___htmlAst',
  ImageChildMarkdownRemarkId = 'image___childMarkdownRemark___id',
  ImageChildMarkdownRemarkInternalContent = 'image___childMarkdownRemark___internal___content',
  ImageChildMarkdownRemarkInternalContentDigest = 'image___childMarkdownRemark___internal___contentDigest',
  ImageChildMarkdownRemarkInternalDescription = 'image___childMarkdownRemark___internal___description',
  ImageChildMarkdownRemarkInternalFieldOwners = 'image___childMarkdownRemark___internal___fieldOwners',
  ImageChildMarkdownRemarkInternalIgnoreType = 'image___childMarkdownRemark___internal___ignoreType',
  ImageChildMarkdownRemarkInternalMediaType = 'image___childMarkdownRemark___internal___mediaType',
  ImageChildMarkdownRemarkInternalOwner = 'image___childMarkdownRemark___internal___owner',
  ImageChildMarkdownRemarkInternalType = 'image___childMarkdownRemark___internal___type',
  ImageChildMarkdownRemarkParentChildren = 'image___childMarkdownRemark___parent___children',
  ImageChildMarkdownRemarkParentId = 'image___childMarkdownRemark___parent___id',
  ImageChildMarkdownRemarkRawMarkdownBody = 'image___childMarkdownRemark___rawMarkdownBody',
  ImageChildMarkdownRemarkTableOfContents = 'image___childMarkdownRemark___tableOfContents',
  ImageChildMarkdownRemarkTimeToRead = 'image___childMarkdownRemark___timeToRead',
  ImageChildMarkdownRemarkWordCountParagraphs = 'image___childMarkdownRemark___wordCount___paragraphs',
  ImageChildMarkdownRemarkWordCountSentences = 'image___childMarkdownRemark___wordCount___sentences',
  ImageChildMarkdownRemarkWordCountWords = 'image___childMarkdownRemark___wordCount___words',
  ImageChildren = 'image___children',
  ImageChildrenAstronautsJson = 'image___childrenAstronautsJson',
  ImageChildrenAstronautsJsonChildren = 'image___childrenAstronautsJson___children',
  ImageChildrenAstronautsJsonChildrenChildren = 'image___childrenAstronautsJson___children___children',
  ImageChildrenAstronautsJsonChildrenId = 'image___childrenAstronautsJson___children___id',
  ImageChildrenAstronautsJsonDesc = 'image___childrenAstronautsJson___desc',
  ImageChildrenAstronautsJsonId = 'image___childrenAstronautsJson___id',
  ImageChildrenAstronautsJsonImageAbsolutePath = 'image___childrenAstronautsJson___image___absolutePath',
  ImageChildrenAstronautsJsonImageAccessTime = 'image___childrenAstronautsJson___image___accessTime',
  ImageChildrenAstronautsJsonImageAtime = 'image___childrenAstronautsJson___image___atime',
  ImageChildrenAstronautsJsonImageAtimeMs = 'image___childrenAstronautsJson___image___atimeMs',
  ImageChildrenAstronautsJsonImageBase = 'image___childrenAstronautsJson___image___base',
  ImageChildrenAstronautsJsonImageBirthTime = 'image___childrenAstronautsJson___image___birthTime',
  ImageChildrenAstronautsJsonImageBirthtime = 'image___childrenAstronautsJson___image___birthtime',
  ImageChildrenAstronautsJsonImageBirthtimeMs = 'image___childrenAstronautsJson___image___birthtimeMs',
  ImageChildrenAstronautsJsonImageBlksize = 'image___childrenAstronautsJson___image___blksize',
  ImageChildrenAstronautsJsonImageBlocks = 'image___childrenAstronautsJson___image___blocks',
  ImageChildrenAstronautsJsonImageChangeTime = 'image___childrenAstronautsJson___image___changeTime',
  ImageChildrenAstronautsJsonImageChildren = 'image___childrenAstronautsJson___image___children',
  ImageChildrenAstronautsJsonImageChildrenAstronautsJson = 'image___childrenAstronautsJson___image___childrenAstronautsJson',
  ImageChildrenAstronautsJsonImageChildrenImageSharp = 'image___childrenAstronautsJson___image___childrenImageSharp',
  ImageChildrenAstronautsJsonImageChildrenMarkdownRemark = 'image___childrenAstronautsJson___image___childrenMarkdownRemark',
  ImageChildrenAstronautsJsonImageCtime = 'image___childrenAstronautsJson___image___ctime',
  ImageChildrenAstronautsJsonImageCtimeMs = 'image___childrenAstronautsJson___image___ctimeMs',
  ImageChildrenAstronautsJsonImageDev = 'image___childrenAstronautsJson___image___dev',
  ImageChildrenAstronautsJsonImageDir = 'image___childrenAstronautsJson___image___dir',
  ImageChildrenAstronautsJsonImageExt = 'image___childrenAstronautsJson___image___ext',
  ImageChildrenAstronautsJsonImageExtension = 'image___childrenAstronautsJson___image___extension',
  ImageChildrenAstronautsJsonImageGid = 'image___childrenAstronautsJson___image___gid',
  ImageChildrenAstronautsJsonImageId = 'image___childrenAstronautsJson___image___id',
  ImageChildrenAstronautsJsonImageIno = 'image___childrenAstronautsJson___image___ino',
  ImageChildrenAstronautsJsonImageMode = 'image___childrenAstronautsJson___image___mode',
  ImageChildrenAstronautsJsonImageModifiedTime = 'image___childrenAstronautsJson___image___modifiedTime',
  ImageChildrenAstronautsJsonImageMtime = 'image___childrenAstronautsJson___image___mtime',
  ImageChildrenAstronautsJsonImageMtimeMs = 'image___childrenAstronautsJson___image___mtimeMs',
  ImageChildrenAstronautsJsonImageName = 'image___childrenAstronautsJson___image___name',
  ImageChildrenAstronautsJsonImageNlink = 'image___childrenAstronautsJson___image___nlink',
  ImageChildrenAstronautsJsonImagePrettySize = 'image___childrenAstronautsJson___image___prettySize',
  ImageChildrenAstronautsJsonImagePublicUrl = 'image___childrenAstronautsJson___image___publicURL',
  ImageChildrenAstronautsJsonImageRdev = 'image___childrenAstronautsJson___image___rdev',
  ImageChildrenAstronautsJsonImageRelativeDirectory = 'image___childrenAstronautsJson___image___relativeDirectory',
  ImageChildrenAstronautsJsonImageRelativePath = 'image___childrenAstronautsJson___image___relativePath',
  ImageChildrenAstronautsJsonImageRoot = 'image___childrenAstronautsJson___image___root',
  ImageChildrenAstronautsJsonImageSize = 'image___childrenAstronautsJson___image___size',
  ImageChildrenAstronautsJsonImageSourceInstanceName = 'image___childrenAstronautsJson___image___sourceInstanceName',
  ImageChildrenAstronautsJsonImageUid = 'image___childrenAstronautsJson___image___uid',
  ImageChildrenAstronautsJsonInternalContent = 'image___childrenAstronautsJson___internal___content',
  ImageChildrenAstronautsJsonInternalContentDigest = 'image___childrenAstronautsJson___internal___contentDigest',
  ImageChildrenAstronautsJsonInternalDescription = 'image___childrenAstronautsJson___internal___description',
  ImageChildrenAstronautsJsonInternalFieldOwners = 'image___childrenAstronautsJson___internal___fieldOwners',
  ImageChildrenAstronautsJsonInternalIgnoreType = 'image___childrenAstronautsJson___internal___ignoreType',
  ImageChildrenAstronautsJsonInternalMediaType = 'image___childrenAstronautsJson___internal___mediaType',
  ImageChildrenAstronautsJsonInternalOwner = 'image___childrenAstronautsJson___internal___owner',
  ImageChildrenAstronautsJsonInternalType = 'image___childrenAstronautsJson___internal___type',
  ImageChildrenAstronautsJsonName = 'image___childrenAstronautsJson___name',
  ImageChildrenAstronautsJsonParentChildren = 'image___childrenAstronautsJson___parent___children',
  ImageChildrenAstronautsJsonParentId = 'image___childrenAstronautsJson___parent___id',
  ImageChildrenAstronautsJsonUrl = 'image___childrenAstronautsJson___url',
  ImageChildrenImageSharp = 'image___childrenImageSharp',
  ImageChildrenImageSharpChildren = 'image___childrenImageSharp___children',
  ImageChildrenImageSharpChildrenChildren = 'image___childrenImageSharp___children___children',
  ImageChildrenImageSharpChildrenId = 'image___childrenImageSharp___children___id',
  ImageChildrenImageSharpFixedAspectRatio = 'image___childrenImageSharp___fixed___aspectRatio',
  ImageChildrenImageSharpFixedBase64 = 'image___childrenImageSharp___fixed___base64',
  ImageChildrenImageSharpFixedHeight = 'image___childrenImageSharp___fixed___height',
  ImageChildrenImageSharpFixedOriginalName = 'image___childrenImageSharp___fixed___originalName',
  ImageChildrenImageSharpFixedSrc = 'image___childrenImageSharp___fixed___src',
  ImageChildrenImageSharpFixedSrcSet = 'image___childrenImageSharp___fixed___srcSet',
  ImageChildrenImageSharpFixedSrcSetWebp = 'image___childrenImageSharp___fixed___srcSetWebp',
  ImageChildrenImageSharpFixedSrcWebp = 'image___childrenImageSharp___fixed___srcWebp',
  ImageChildrenImageSharpFixedTracedSvg = 'image___childrenImageSharp___fixed___tracedSVG',
  ImageChildrenImageSharpFixedWidth = 'image___childrenImageSharp___fixed___width',
  ImageChildrenImageSharpFluidAspectRatio = 'image___childrenImageSharp___fluid___aspectRatio',
  ImageChildrenImageSharpFluidBase64 = 'image___childrenImageSharp___fluid___base64',
  ImageChildrenImageSharpFluidOriginalImg = 'image___childrenImageSharp___fluid___originalImg',
  ImageChildrenImageSharpFluidOriginalName = 'image___childrenImageSharp___fluid___originalName',
  ImageChildrenImageSharpFluidPresentationHeight = 'image___childrenImageSharp___fluid___presentationHeight',
  ImageChildrenImageSharpFluidPresentationWidth = 'image___childrenImageSharp___fluid___presentationWidth',
  ImageChildrenImageSharpFluidSizes = 'image___childrenImageSharp___fluid___sizes',
  ImageChildrenImageSharpFluidSrc = 'image___childrenImageSharp___fluid___src',
  ImageChildrenImageSharpFluidSrcSet = 'image___childrenImageSharp___fluid___srcSet',
  ImageChildrenImageSharpFluidSrcSetWebp = 'image___childrenImageSharp___fluid___srcSetWebp',
  ImageChildrenImageSharpFluidSrcWebp = 'image___childrenImageSharp___fluid___srcWebp',
  ImageChildrenImageSharpFluidTracedSvg = 'image___childrenImageSharp___fluid___tracedSVG',
  ImageChildrenImageSharpGatsbyImageData = 'image___childrenImageSharp___gatsbyImageData',
  ImageChildrenImageSharpId = 'image___childrenImageSharp___id',
  ImageChildrenImageSharpInternalContent = 'image___childrenImageSharp___internal___content',
  ImageChildrenImageSharpInternalContentDigest = 'image___childrenImageSharp___internal___contentDigest',
  ImageChildrenImageSharpInternalDescription = 'image___childrenImageSharp___internal___description',
  ImageChildrenImageSharpInternalFieldOwners = 'image___childrenImageSharp___internal___fieldOwners',
  ImageChildrenImageSharpInternalIgnoreType = 'image___childrenImageSharp___internal___ignoreType',
  ImageChildrenImageSharpInternalMediaType = 'image___childrenImageSharp___internal___mediaType',
  ImageChildrenImageSharpInternalOwner = 'image___childrenImageSharp___internal___owner',
  ImageChildrenImageSharpInternalType = 'image___childrenImageSharp___internal___type',
  ImageChildrenImageSharpOriginalHeight = 'image___childrenImageSharp___original___height',
  ImageChildrenImageSharpOriginalSrc = 'image___childrenImageSharp___original___src',
  ImageChildrenImageSharpOriginalWidth = 'image___childrenImageSharp___original___width',
  ImageChildrenImageSharpParentChildren = 'image___childrenImageSharp___parent___children',
  ImageChildrenImageSharpParentId = 'image___childrenImageSharp___parent___id',
  ImageChildrenImageSharpResizeAspectRatio = 'image___childrenImageSharp___resize___aspectRatio',
  ImageChildrenImageSharpResizeHeight = 'image___childrenImageSharp___resize___height',
  ImageChildrenImageSharpResizeOriginalName = 'image___childrenImageSharp___resize___originalName',
  ImageChildrenImageSharpResizeSrc = 'image___childrenImageSharp___resize___src',
  ImageChildrenImageSharpResizeTracedSvg = 'image___childrenImageSharp___resize___tracedSVG',
  ImageChildrenImageSharpResizeWidth = 'image___childrenImageSharp___resize___width',
  ImageChildrenMarkdownRemark = 'image___childrenMarkdownRemark',
  ImageChildrenMarkdownRemarkChildren = 'image___childrenMarkdownRemark___children',
  ImageChildrenMarkdownRemarkChildrenChildren = 'image___childrenMarkdownRemark___children___children',
  ImageChildrenMarkdownRemarkChildrenId = 'image___childrenMarkdownRemark___children___id',
  ImageChildrenMarkdownRemarkExcerpt = 'image___childrenMarkdownRemark___excerpt',
  ImageChildrenMarkdownRemarkExcerptAst = 'image___childrenMarkdownRemark___excerptAst',
  ImageChildrenMarkdownRemarkFileAbsolutePath = 'image___childrenMarkdownRemark___fileAbsolutePath',
  ImageChildrenMarkdownRemarkFrontmatterTitle = 'image___childrenMarkdownRemark___frontmatter___title',
  ImageChildrenMarkdownRemarkHeadings = 'image___childrenMarkdownRemark___headings',
  ImageChildrenMarkdownRemarkHeadingsDepth = 'image___childrenMarkdownRemark___headings___depth',
  ImageChildrenMarkdownRemarkHeadingsId = 'image___childrenMarkdownRemark___headings___id',
  ImageChildrenMarkdownRemarkHeadingsValue = 'image___childrenMarkdownRemark___headings___value',
  ImageChildrenMarkdownRemarkHtml = 'image___childrenMarkdownRemark___html',
  ImageChildrenMarkdownRemarkHtmlAst = 'image___childrenMarkdownRemark___htmlAst',
  ImageChildrenMarkdownRemarkId = 'image___childrenMarkdownRemark___id',
  ImageChildrenMarkdownRemarkInternalContent = 'image___childrenMarkdownRemark___internal___content',
  ImageChildrenMarkdownRemarkInternalContentDigest = 'image___childrenMarkdownRemark___internal___contentDigest',
  ImageChildrenMarkdownRemarkInternalDescription = 'image___childrenMarkdownRemark___internal___description',
  ImageChildrenMarkdownRemarkInternalFieldOwners = 'image___childrenMarkdownRemark___internal___fieldOwners',
  ImageChildrenMarkdownRemarkInternalIgnoreType = 'image___childrenMarkdownRemark___internal___ignoreType',
  ImageChildrenMarkdownRemarkInternalMediaType = 'image___childrenMarkdownRemark___internal___mediaType',
  ImageChildrenMarkdownRemarkInternalOwner = 'image___childrenMarkdownRemark___internal___owner',
  ImageChildrenMarkdownRemarkInternalType = 'image___childrenMarkdownRemark___internal___type',
  ImageChildrenMarkdownRemarkParentChildren = 'image___childrenMarkdownRemark___parent___children',
  ImageChildrenMarkdownRemarkParentId = 'image___childrenMarkdownRemark___parent___id',
  ImageChildrenMarkdownRemarkRawMarkdownBody = 'image___childrenMarkdownRemark___rawMarkdownBody',
  ImageChildrenMarkdownRemarkTableOfContents = 'image___childrenMarkdownRemark___tableOfContents',
  ImageChildrenMarkdownRemarkTimeToRead = 'image___childrenMarkdownRemark___timeToRead',
  ImageChildrenMarkdownRemarkWordCountParagraphs = 'image___childrenMarkdownRemark___wordCount___paragraphs',
  ImageChildrenMarkdownRemarkWordCountSentences = 'image___childrenMarkdownRemark___wordCount___sentences',
  ImageChildrenMarkdownRemarkWordCountWords = 'image___childrenMarkdownRemark___wordCount___words',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenId = 'image___children___id',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageCtime = 'image___ctime',
  ImageCtimeMs = 'image___ctimeMs',
  ImageDev = 'image___dev',
  ImageDir = 'image___dir',
  ImageExt = 'image___ext',
  ImageExtension = 'image___extension',
  ImageGid = 'image___gid',
  ImageId = 'image___id',
  ImageIno = 'image___ino',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  ImageMode = 'image___mode',
  ImageModifiedTime = 'image___modifiedTime',
  ImageMtime = 'image___mtime',
  ImageMtimeMs = 'image___mtimeMs',
  ImageName = 'image___name',
  ImageNlink = 'image___nlink',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentId = 'image___parent___id',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentParentId = 'image___parent___parent___id',
  ImagePrettySize = 'image___prettySize',
  ImagePublicUrl = 'image___publicURL',
  ImageRdev = 'image___rdev',
  ImageRelativeDirectory = 'image___relativeDirectory',
  ImageRelativePath = 'image___relativePath',
  ImageRoot = 'image___root',
  ImageSize = 'image___size',
  ImageSourceInstanceName = 'image___sourceInstanceName',
  ImageUid = 'image___uid',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Url = 'url'
}

export type AstronautsJsonFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  desc?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<FileFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type AstronautsJsonFilterListInput = {
  elemMatch?: InputMaybe<AstronautsJsonFilterInput>;
};

export type AstronautsJsonGroupConnection = {
  __typename?: 'AstronautsJsonGroupConnection';
  edges: Array<AstronautsJsonEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  nodes: Array<AstronautsJson>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AstronautsJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<AstronautsJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type AstronautsJson or null if there are no children of given type on this node */
  childAstronautsJson?: Maybe<AstronautsJson>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type AstronautsJson */
  childrenAstronautsJson?: Maybe<Array<Maybe<AstronautsJson>>>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildAstronautsJsonChildren = 'childAstronautsJson___children',
  ChildAstronautsJsonChildrenChildren = 'childAstronautsJson___children___children',
  ChildAstronautsJsonChildrenChildrenChildren = 'childAstronautsJson___children___children___children',
  ChildAstronautsJsonChildrenChildrenId = 'childAstronautsJson___children___children___id',
  ChildAstronautsJsonChildrenId = 'childAstronautsJson___children___id',
  ChildAstronautsJsonChildrenInternalContent = 'childAstronautsJson___children___internal___content',
  ChildAstronautsJsonChildrenInternalContentDigest = 'childAstronautsJson___children___internal___contentDigest',
  ChildAstronautsJsonChildrenInternalDescription = 'childAstronautsJson___children___internal___description',
  ChildAstronautsJsonChildrenInternalFieldOwners = 'childAstronautsJson___children___internal___fieldOwners',
  ChildAstronautsJsonChildrenInternalIgnoreType = 'childAstronautsJson___children___internal___ignoreType',
  ChildAstronautsJsonChildrenInternalMediaType = 'childAstronautsJson___children___internal___mediaType',
  ChildAstronautsJsonChildrenInternalOwner = 'childAstronautsJson___children___internal___owner',
  ChildAstronautsJsonChildrenInternalType = 'childAstronautsJson___children___internal___type',
  ChildAstronautsJsonChildrenParentChildren = 'childAstronautsJson___children___parent___children',
  ChildAstronautsJsonChildrenParentId = 'childAstronautsJson___children___parent___id',
  ChildAstronautsJsonDesc = 'childAstronautsJson___desc',
  ChildAstronautsJsonId = 'childAstronautsJson___id',
  ChildAstronautsJsonImageAbsolutePath = 'childAstronautsJson___image___absolutePath',
  ChildAstronautsJsonImageAccessTime = 'childAstronautsJson___image___accessTime',
  ChildAstronautsJsonImageAtime = 'childAstronautsJson___image___atime',
  ChildAstronautsJsonImageAtimeMs = 'childAstronautsJson___image___atimeMs',
  ChildAstronautsJsonImageBase = 'childAstronautsJson___image___base',
  ChildAstronautsJsonImageBirthTime = 'childAstronautsJson___image___birthTime',
  ChildAstronautsJsonImageBirthtime = 'childAstronautsJson___image___birthtime',
  ChildAstronautsJsonImageBirthtimeMs = 'childAstronautsJson___image___birthtimeMs',
  ChildAstronautsJsonImageBlksize = 'childAstronautsJson___image___blksize',
  ChildAstronautsJsonImageBlocks = 'childAstronautsJson___image___blocks',
  ChildAstronautsJsonImageChangeTime = 'childAstronautsJson___image___changeTime',
  ChildAstronautsJsonImageChildAstronautsJsonChildren = 'childAstronautsJson___image___childAstronautsJson___children',
  ChildAstronautsJsonImageChildAstronautsJsonDesc = 'childAstronautsJson___image___childAstronautsJson___desc',
  ChildAstronautsJsonImageChildAstronautsJsonId = 'childAstronautsJson___image___childAstronautsJson___id',
  ChildAstronautsJsonImageChildAstronautsJsonName = 'childAstronautsJson___image___childAstronautsJson___name',
  ChildAstronautsJsonImageChildAstronautsJsonUrl = 'childAstronautsJson___image___childAstronautsJson___url',
  ChildAstronautsJsonImageChildImageSharpChildren = 'childAstronautsJson___image___childImageSharp___children',
  ChildAstronautsJsonImageChildImageSharpGatsbyImageData = 'childAstronautsJson___image___childImageSharp___gatsbyImageData',
  ChildAstronautsJsonImageChildImageSharpId = 'childAstronautsJson___image___childImageSharp___id',
  ChildAstronautsJsonImageChildMarkdownRemarkChildren = 'childAstronautsJson___image___childMarkdownRemark___children',
  ChildAstronautsJsonImageChildMarkdownRemarkExcerpt = 'childAstronautsJson___image___childMarkdownRemark___excerpt',
  ChildAstronautsJsonImageChildMarkdownRemarkExcerptAst = 'childAstronautsJson___image___childMarkdownRemark___excerptAst',
  ChildAstronautsJsonImageChildMarkdownRemarkFileAbsolutePath = 'childAstronautsJson___image___childMarkdownRemark___fileAbsolutePath',
  ChildAstronautsJsonImageChildMarkdownRemarkHeadings = 'childAstronautsJson___image___childMarkdownRemark___headings',
  ChildAstronautsJsonImageChildMarkdownRemarkHtml = 'childAstronautsJson___image___childMarkdownRemark___html',
  ChildAstronautsJsonImageChildMarkdownRemarkHtmlAst = 'childAstronautsJson___image___childMarkdownRemark___htmlAst',
  ChildAstronautsJsonImageChildMarkdownRemarkId = 'childAstronautsJson___image___childMarkdownRemark___id',
  ChildAstronautsJsonImageChildMarkdownRemarkRawMarkdownBody = 'childAstronautsJson___image___childMarkdownRemark___rawMarkdownBody',
  ChildAstronautsJsonImageChildMarkdownRemarkTableOfContents = 'childAstronautsJson___image___childMarkdownRemark___tableOfContents',
  ChildAstronautsJsonImageChildMarkdownRemarkTimeToRead = 'childAstronautsJson___image___childMarkdownRemark___timeToRead',
  ChildAstronautsJsonImageChildren = 'childAstronautsJson___image___children',
  ChildAstronautsJsonImageChildrenAstronautsJson = 'childAstronautsJson___image___childrenAstronautsJson',
  ChildAstronautsJsonImageChildrenAstronautsJsonChildren = 'childAstronautsJson___image___childrenAstronautsJson___children',
  ChildAstronautsJsonImageChildrenAstronautsJsonDesc = 'childAstronautsJson___image___childrenAstronautsJson___desc',
  ChildAstronautsJsonImageChildrenAstronautsJsonId = 'childAstronautsJson___image___childrenAstronautsJson___id',
  ChildAstronautsJsonImageChildrenAstronautsJsonName = 'childAstronautsJson___image___childrenAstronautsJson___name',
  ChildAstronautsJsonImageChildrenAstronautsJsonUrl = 'childAstronautsJson___image___childrenAstronautsJson___url',
  ChildAstronautsJsonImageChildrenImageSharp = 'childAstronautsJson___image___childrenImageSharp',
  ChildAstronautsJsonImageChildrenImageSharpChildren = 'childAstronautsJson___image___childrenImageSharp___children',
  ChildAstronautsJsonImageChildrenImageSharpGatsbyImageData = 'childAstronautsJson___image___childrenImageSharp___gatsbyImageData',
  ChildAstronautsJsonImageChildrenImageSharpId = 'childAstronautsJson___image___childrenImageSharp___id',
  ChildAstronautsJsonImageChildrenMarkdownRemark = 'childAstronautsJson___image___childrenMarkdownRemark',
  ChildAstronautsJsonImageChildrenMarkdownRemarkChildren = 'childAstronautsJson___image___childrenMarkdownRemark___children',
  ChildAstronautsJsonImageChildrenMarkdownRemarkExcerpt = 'childAstronautsJson___image___childrenMarkdownRemark___excerpt',
  ChildAstronautsJsonImageChildrenMarkdownRemarkExcerptAst = 'childAstronautsJson___image___childrenMarkdownRemark___excerptAst',
  ChildAstronautsJsonImageChildrenMarkdownRemarkFileAbsolutePath = 'childAstronautsJson___image___childrenMarkdownRemark___fileAbsolutePath',
  ChildAstronautsJsonImageChildrenMarkdownRemarkHeadings = 'childAstronautsJson___image___childrenMarkdownRemark___headings',
  ChildAstronautsJsonImageChildrenMarkdownRemarkHtml = 'childAstronautsJson___image___childrenMarkdownRemark___html',
  ChildAstronautsJsonImageChildrenMarkdownRemarkHtmlAst = 'childAstronautsJson___image___childrenMarkdownRemark___htmlAst',
  ChildAstronautsJsonImageChildrenMarkdownRemarkId = 'childAstronautsJson___image___childrenMarkdownRemark___id',
  ChildAstronautsJsonImageChildrenMarkdownRemarkRawMarkdownBody = 'childAstronautsJson___image___childrenMarkdownRemark___rawMarkdownBody',
  ChildAstronautsJsonImageChildrenMarkdownRemarkTableOfContents = 'childAstronautsJson___image___childrenMarkdownRemark___tableOfContents',
  ChildAstronautsJsonImageChildrenMarkdownRemarkTimeToRead = 'childAstronautsJson___image___childrenMarkdownRemark___timeToRead',
  ChildAstronautsJsonImageChildrenChildren = 'childAstronautsJson___image___children___children',
  ChildAstronautsJsonImageChildrenId = 'childAstronautsJson___image___children___id',
  ChildAstronautsJsonImageCtime = 'childAstronautsJson___image___ctime',
  ChildAstronautsJsonImageCtimeMs = 'childAstronautsJson___image___ctimeMs',
  ChildAstronautsJsonImageDev = 'childAstronautsJson___image___dev',
  ChildAstronautsJsonImageDir = 'childAstronautsJson___image___dir',
  ChildAstronautsJsonImageExt = 'childAstronautsJson___image___ext',
  ChildAstronautsJsonImageExtension = 'childAstronautsJson___image___extension',
  ChildAstronautsJsonImageGid = 'childAstronautsJson___image___gid',
  ChildAstronautsJsonImageId = 'childAstronautsJson___image___id',
  ChildAstronautsJsonImageIno = 'childAstronautsJson___image___ino',
  ChildAstronautsJsonImageInternalContent = 'childAstronautsJson___image___internal___content',
  ChildAstronautsJsonImageInternalContentDigest = 'childAstronautsJson___image___internal___contentDigest',
  ChildAstronautsJsonImageInternalDescription = 'childAstronautsJson___image___internal___description',
  ChildAstronautsJsonImageInternalFieldOwners = 'childAstronautsJson___image___internal___fieldOwners',
  ChildAstronautsJsonImageInternalIgnoreType = 'childAstronautsJson___image___internal___ignoreType',
  ChildAstronautsJsonImageInternalMediaType = 'childAstronautsJson___image___internal___mediaType',
  ChildAstronautsJsonImageInternalOwner = 'childAstronautsJson___image___internal___owner',
  ChildAstronautsJsonImageInternalType = 'childAstronautsJson___image___internal___type',
  ChildAstronautsJsonImageMode = 'childAstronautsJson___image___mode',
  ChildAstronautsJsonImageModifiedTime = 'childAstronautsJson___image___modifiedTime',
  ChildAstronautsJsonImageMtime = 'childAstronautsJson___image___mtime',
  ChildAstronautsJsonImageMtimeMs = 'childAstronautsJson___image___mtimeMs',
  ChildAstronautsJsonImageName = 'childAstronautsJson___image___name',
  ChildAstronautsJsonImageNlink = 'childAstronautsJson___image___nlink',
  ChildAstronautsJsonImageParentChildren = 'childAstronautsJson___image___parent___children',
  ChildAstronautsJsonImageParentId = 'childAstronautsJson___image___parent___id',
  ChildAstronautsJsonImagePrettySize = 'childAstronautsJson___image___prettySize',
  ChildAstronautsJsonImagePublicUrl = 'childAstronautsJson___image___publicURL',
  ChildAstronautsJsonImageRdev = 'childAstronautsJson___image___rdev',
  ChildAstronautsJsonImageRelativeDirectory = 'childAstronautsJson___image___relativeDirectory',
  ChildAstronautsJsonImageRelativePath = 'childAstronautsJson___image___relativePath',
  ChildAstronautsJsonImageRoot = 'childAstronautsJson___image___root',
  ChildAstronautsJsonImageSize = 'childAstronautsJson___image___size',
  ChildAstronautsJsonImageSourceInstanceName = 'childAstronautsJson___image___sourceInstanceName',
  ChildAstronautsJsonImageUid = 'childAstronautsJson___image___uid',
  ChildAstronautsJsonInternalContent = 'childAstronautsJson___internal___content',
  ChildAstronautsJsonInternalContentDigest = 'childAstronautsJson___internal___contentDigest',
  ChildAstronautsJsonInternalDescription = 'childAstronautsJson___internal___description',
  ChildAstronautsJsonInternalFieldOwners = 'childAstronautsJson___internal___fieldOwners',
  ChildAstronautsJsonInternalIgnoreType = 'childAstronautsJson___internal___ignoreType',
  ChildAstronautsJsonInternalMediaType = 'childAstronautsJson___internal___mediaType',
  ChildAstronautsJsonInternalOwner = 'childAstronautsJson___internal___owner',
  ChildAstronautsJsonInternalType = 'childAstronautsJson___internal___type',
  ChildAstronautsJsonName = 'childAstronautsJson___name',
  ChildAstronautsJsonParentChildren = 'childAstronautsJson___parent___children',
  ChildAstronautsJsonParentChildrenChildren = 'childAstronautsJson___parent___children___children',
  ChildAstronautsJsonParentChildrenId = 'childAstronautsJson___parent___children___id',
  ChildAstronautsJsonParentId = 'childAstronautsJson___parent___id',
  ChildAstronautsJsonParentInternalContent = 'childAstronautsJson___parent___internal___content',
  ChildAstronautsJsonParentInternalContentDigest = 'childAstronautsJson___parent___internal___contentDigest',
  ChildAstronautsJsonParentInternalDescription = 'childAstronautsJson___parent___internal___description',
  ChildAstronautsJsonParentInternalFieldOwners = 'childAstronautsJson___parent___internal___fieldOwners',
  ChildAstronautsJsonParentInternalIgnoreType = 'childAstronautsJson___parent___internal___ignoreType',
  ChildAstronautsJsonParentInternalMediaType = 'childAstronautsJson___parent___internal___mediaType',
  ChildAstronautsJsonParentInternalOwner = 'childAstronautsJson___parent___internal___owner',
  ChildAstronautsJsonParentInternalType = 'childAstronautsJson___parent___internal___type',
  ChildAstronautsJsonParentParentChildren = 'childAstronautsJson___parent___parent___children',
  ChildAstronautsJsonParentParentId = 'childAstronautsJson___parent___parent___id',
  ChildAstronautsJsonUrl = 'childAstronautsJson___url',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  Children = 'children',
  ChildrenAstronautsJson = 'childrenAstronautsJson',
  ChildrenAstronautsJsonChildren = 'childrenAstronautsJson___children',
  ChildrenAstronautsJsonChildrenChildren = 'childrenAstronautsJson___children___children',
  ChildrenAstronautsJsonChildrenChildrenChildren = 'childrenAstronautsJson___children___children___children',
  ChildrenAstronautsJsonChildrenChildrenId = 'childrenAstronautsJson___children___children___id',
  ChildrenAstronautsJsonChildrenId = 'childrenAstronautsJson___children___id',
  ChildrenAstronautsJsonChildrenInternalContent = 'childrenAstronautsJson___children___internal___content',
  ChildrenAstronautsJsonChildrenInternalContentDigest = 'childrenAstronautsJson___children___internal___contentDigest',
  ChildrenAstronautsJsonChildrenInternalDescription = 'childrenAstronautsJson___children___internal___description',
  ChildrenAstronautsJsonChildrenInternalFieldOwners = 'childrenAstronautsJson___children___internal___fieldOwners',
  ChildrenAstronautsJsonChildrenInternalIgnoreType = 'childrenAstronautsJson___children___internal___ignoreType',
  ChildrenAstronautsJsonChildrenInternalMediaType = 'childrenAstronautsJson___children___internal___mediaType',
  ChildrenAstronautsJsonChildrenInternalOwner = 'childrenAstronautsJson___children___internal___owner',
  ChildrenAstronautsJsonChildrenInternalType = 'childrenAstronautsJson___children___internal___type',
  ChildrenAstronautsJsonChildrenParentChildren = 'childrenAstronautsJson___children___parent___children',
  ChildrenAstronautsJsonChildrenParentId = 'childrenAstronautsJson___children___parent___id',
  ChildrenAstronautsJsonDesc = 'childrenAstronautsJson___desc',
  ChildrenAstronautsJsonId = 'childrenAstronautsJson___id',
  ChildrenAstronautsJsonImageAbsolutePath = 'childrenAstronautsJson___image___absolutePath',
  ChildrenAstronautsJsonImageAccessTime = 'childrenAstronautsJson___image___accessTime',
  ChildrenAstronautsJsonImageAtime = 'childrenAstronautsJson___image___atime',
  ChildrenAstronautsJsonImageAtimeMs = 'childrenAstronautsJson___image___atimeMs',
  ChildrenAstronautsJsonImageBase = 'childrenAstronautsJson___image___base',
  ChildrenAstronautsJsonImageBirthTime = 'childrenAstronautsJson___image___birthTime',
  ChildrenAstronautsJsonImageBirthtime = 'childrenAstronautsJson___image___birthtime',
  ChildrenAstronautsJsonImageBirthtimeMs = 'childrenAstronautsJson___image___birthtimeMs',
  ChildrenAstronautsJsonImageBlksize = 'childrenAstronautsJson___image___blksize',
  ChildrenAstronautsJsonImageBlocks = 'childrenAstronautsJson___image___blocks',
  ChildrenAstronautsJsonImageChangeTime = 'childrenAstronautsJson___image___changeTime',
  ChildrenAstronautsJsonImageChildAstronautsJsonChildren = 'childrenAstronautsJson___image___childAstronautsJson___children',
  ChildrenAstronautsJsonImageChildAstronautsJsonDesc = 'childrenAstronautsJson___image___childAstronautsJson___desc',
  ChildrenAstronautsJsonImageChildAstronautsJsonId = 'childrenAstronautsJson___image___childAstronautsJson___id',
  ChildrenAstronautsJsonImageChildAstronautsJsonName = 'childrenAstronautsJson___image___childAstronautsJson___name',
  ChildrenAstronautsJsonImageChildAstronautsJsonUrl = 'childrenAstronautsJson___image___childAstronautsJson___url',
  ChildrenAstronautsJsonImageChildImageSharpChildren = 'childrenAstronautsJson___image___childImageSharp___children',
  ChildrenAstronautsJsonImageChildImageSharpGatsbyImageData = 'childrenAstronautsJson___image___childImageSharp___gatsbyImageData',
  ChildrenAstronautsJsonImageChildImageSharpId = 'childrenAstronautsJson___image___childImageSharp___id',
  ChildrenAstronautsJsonImageChildMarkdownRemarkChildren = 'childrenAstronautsJson___image___childMarkdownRemark___children',
  ChildrenAstronautsJsonImageChildMarkdownRemarkExcerpt = 'childrenAstronautsJson___image___childMarkdownRemark___excerpt',
  ChildrenAstronautsJsonImageChildMarkdownRemarkExcerptAst = 'childrenAstronautsJson___image___childMarkdownRemark___excerptAst',
  ChildrenAstronautsJsonImageChildMarkdownRemarkFileAbsolutePath = 'childrenAstronautsJson___image___childMarkdownRemark___fileAbsolutePath',
  ChildrenAstronautsJsonImageChildMarkdownRemarkHeadings = 'childrenAstronautsJson___image___childMarkdownRemark___headings',
  ChildrenAstronautsJsonImageChildMarkdownRemarkHtml = 'childrenAstronautsJson___image___childMarkdownRemark___html',
  ChildrenAstronautsJsonImageChildMarkdownRemarkHtmlAst = 'childrenAstronautsJson___image___childMarkdownRemark___htmlAst',
  ChildrenAstronautsJsonImageChildMarkdownRemarkId = 'childrenAstronautsJson___image___childMarkdownRemark___id',
  ChildrenAstronautsJsonImageChildMarkdownRemarkRawMarkdownBody = 'childrenAstronautsJson___image___childMarkdownRemark___rawMarkdownBody',
  ChildrenAstronautsJsonImageChildMarkdownRemarkTableOfContents = 'childrenAstronautsJson___image___childMarkdownRemark___tableOfContents',
  ChildrenAstronautsJsonImageChildMarkdownRemarkTimeToRead = 'childrenAstronautsJson___image___childMarkdownRemark___timeToRead',
  ChildrenAstronautsJsonImageChildren = 'childrenAstronautsJson___image___children',
  ChildrenAstronautsJsonImageChildrenAstronautsJson = 'childrenAstronautsJson___image___childrenAstronautsJson',
  ChildrenAstronautsJsonImageChildrenAstronautsJsonChildren = 'childrenAstronautsJson___image___childrenAstronautsJson___children',
  ChildrenAstronautsJsonImageChildrenAstronautsJsonDesc = 'childrenAstronautsJson___image___childrenAstronautsJson___desc',
  ChildrenAstronautsJsonImageChildrenAstronautsJsonId = 'childrenAstronautsJson___image___childrenAstronautsJson___id',
  ChildrenAstronautsJsonImageChildrenAstronautsJsonName = 'childrenAstronautsJson___image___childrenAstronautsJson___name',
  ChildrenAstronautsJsonImageChildrenAstronautsJsonUrl = 'childrenAstronautsJson___image___childrenAstronautsJson___url',
  ChildrenAstronautsJsonImageChildrenImageSharp = 'childrenAstronautsJson___image___childrenImageSharp',
  ChildrenAstronautsJsonImageChildrenImageSharpChildren = 'childrenAstronautsJson___image___childrenImageSharp___children',
  ChildrenAstronautsJsonImageChildrenImageSharpGatsbyImageData = 'childrenAstronautsJson___image___childrenImageSharp___gatsbyImageData',
  ChildrenAstronautsJsonImageChildrenImageSharpId = 'childrenAstronautsJson___image___childrenImageSharp___id',
  ChildrenAstronautsJsonImageChildrenMarkdownRemark = 'childrenAstronautsJson___image___childrenMarkdownRemark',
  ChildrenAstronautsJsonImageChildrenMarkdownRemarkChildren = 'childrenAstronautsJson___image___childrenMarkdownRemark___children',
  ChildrenAstronautsJsonImageChildrenMarkdownRemarkExcerpt = 'childrenAstronautsJson___image___childrenMarkdownRemark___excerpt',
  ChildrenAstronautsJsonImageChildrenMarkdownRemarkExcerptAst = 'childrenAstronautsJson___image___childrenMarkdownRemark___excerptAst',
  ChildrenAstronautsJsonImageChildrenMarkdownRemarkFileAbsolutePath = 'childrenAstronautsJson___image___childrenMarkdownRemark___fileAbsolutePath',
  ChildrenAstronautsJsonImageChildrenMarkdownRemarkHeadings = 'childrenAstronautsJson___image___childrenMarkdownRemark___headings',
  ChildrenAstronautsJsonImageChildrenMarkdownRemarkHtml = 'childrenAstronautsJson___image___childrenMarkdownRemark___html',
  ChildrenAstronautsJsonImageChildrenMarkdownRemarkHtmlAst = 'childrenAstronautsJson___image___childrenMarkdownRemark___htmlAst',
  ChildrenAstronautsJsonImageChildrenMarkdownRemarkId = 'childrenAstronautsJson___image___childrenMarkdownRemark___id',
  ChildrenAstronautsJsonImageChildrenMarkdownRemarkRawMarkdownBody = 'childrenAstronautsJson___image___childrenMarkdownRemark___rawMarkdownBody',
  ChildrenAstronautsJsonImageChildrenMarkdownRemarkTableOfContents = 'childrenAstronautsJson___image___childrenMarkdownRemark___tableOfContents',
  ChildrenAstronautsJsonImageChildrenMarkdownRemarkTimeToRead = 'childrenAstronautsJson___image___childrenMarkdownRemark___timeToRead',
  ChildrenAstronautsJsonImageChildrenChildren = 'childrenAstronautsJson___image___children___children',
  ChildrenAstronautsJsonImageChildrenId = 'childrenAstronautsJson___image___children___id',
  ChildrenAstronautsJsonImageCtime = 'childrenAstronautsJson___image___ctime',
  ChildrenAstronautsJsonImageCtimeMs = 'childrenAstronautsJson___image___ctimeMs',
  ChildrenAstronautsJsonImageDev = 'childrenAstronautsJson___image___dev',
  ChildrenAstronautsJsonImageDir = 'childrenAstronautsJson___image___dir',
  ChildrenAstronautsJsonImageExt = 'childrenAstronautsJson___image___ext',
  ChildrenAstronautsJsonImageExtension = 'childrenAstronautsJson___image___extension',
  ChildrenAstronautsJsonImageGid = 'childrenAstronautsJson___image___gid',
  ChildrenAstronautsJsonImageId = 'childrenAstronautsJson___image___id',
  ChildrenAstronautsJsonImageIno = 'childrenAstronautsJson___image___ino',
  ChildrenAstronautsJsonImageInternalContent = 'childrenAstronautsJson___image___internal___content',
  ChildrenAstronautsJsonImageInternalContentDigest = 'childrenAstronautsJson___image___internal___contentDigest',
  ChildrenAstronautsJsonImageInternalDescription = 'childrenAstronautsJson___image___internal___description',
  ChildrenAstronautsJsonImageInternalFieldOwners = 'childrenAstronautsJson___image___internal___fieldOwners',
  ChildrenAstronautsJsonImageInternalIgnoreType = 'childrenAstronautsJson___image___internal___ignoreType',
  ChildrenAstronautsJsonImageInternalMediaType = 'childrenAstronautsJson___image___internal___mediaType',
  ChildrenAstronautsJsonImageInternalOwner = 'childrenAstronautsJson___image___internal___owner',
  ChildrenAstronautsJsonImageInternalType = 'childrenAstronautsJson___image___internal___type',
  ChildrenAstronautsJsonImageMode = 'childrenAstronautsJson___image___mode',
  ChildrenAstronautsJsonImageModifiedTime = 'childrenAstronautsJson___image___modifiedTime',
  ChildrenAstronautsJsonImageMtime = 'childrenAstronautsJson___image___mtime',
  ChildrenAstronautsJsonImageMtimeMs = 'childrenAstronautsJson___image___mtimeMs',
  ChildrenAstronautsJsonImageName = 'childrenAstronautsJson___image___name',
  ChildrenAstronautsJsonImageNlink = 'childrenAstronautsJson___image___nlink',
  ChildrenAstronautsJsonImageParentChildren = 'childrenAstronautsJson___image___parent___children',
  ChildrenAstronautsJsonImageParentId = 'childrenAstronautsJson___image___parent___id',
  ChildrenAstronautsJsonImagePrettySize = 'childrenAstronautsJson___image___prettySize',
  ChildrenAstronautsJsonImagePublicUrl = 'childrenAstronautsJson___image___publicURL',
  ChildrenAstronautsJsonImageRdev = 'childrenAstronautsJson___image___rdev',
  ChildrenAstronautsJsonImageRelativeDirectory = 'childrenAstronautsJson___image___relativeDirectory',
  ChildrenAstronautsJsonImageRelativePath = 'childrenAstronautsJson___image___relativePath',
  ChildrenAstronautsJsonImageRoot = 'childrenAstronautsJson___image___root',
  ChildrenAstronautsJsonImageSize = 'childrenAstronautsJson___image___size',
  ChildrenAstronautsJsonImageSourceInstanceName = 'childrenAstronautsJson___image___sourceInstanceName',
  ChildrenAstronautsJsonImageUid = 'childrenAstronautsJson___image___uid',
  ChildrenAstronautsJsonInternalContent = 'childrenAstronautsJson___internal___content',
  ChildrenAstronautsJsonInternalContentDigest = 'childrenAstronautsJson___internal___contentDigest',
  ChildrenAstronautsJsonInternalDescription = 'childrenAstronautsJson___internal___description',
  ChildrenAstronautsJsonInternalFieldOwners = 'childrenAstronautsJson___internal___fieldOwners',
  ChildrenAstronautsJsonInternalIgnoreType = 'childrenAstronautsJson___internal___ignoreType',
  ChildrenAstronautsJsonInternalMediaType = 'childrenAstronautsJson___internal___mediaType',
  ChildrenAstronautsJsonInternalOwner = 'childrenAstronautsJson___internal___owner',
  ChildrenAstronautsJsonInternalType = 'childrenAstronautsJson___internal___type',
  ChildrenAstronautsJsonName = 'childrenAstronautsJson___name',
  ChildrenAstronautsJsonParentChildren = 'childrenAstronautsJson___parent___children',
  ChildrenAstronautsJsonParentChildrenChildren = 'childrenAstronautsJson___parent___children___children',
  ChildrenAstronautsJsonParentChildrenId = 'childrenAstronautsJson___parent___children___id',
  ChildrenAstronautsJsonParentId = 'childrenAstronautsJson___parent___id',
  ChildrenAstronautsJsonParentInternalContent = 'childrenAstronautsJson___parent___internal___content',
  ChildrenAstronautsJsonParentInternalContentDigest = 'childrenAstronautsJson___parent___internal___contentDigest',
  ChildrenAstronautsJsonParentInternalDescription = 'childrenAstronautsJson___parent___internal___description',
  ChildrenAstronautsJsonParentInternalFieldOwners = 'childrenAstronautsJson___parent___internal___fieldOwners',
  ChildrenAstronautsJsonParentInternalIgnoreType = 'childrenAstronautsJson___parent___internal___ignoreType',
  ChildrenAstronautsJsonParentInternalMediaType = 'childrenAstronautsJson___parent___internal___mediaType',
  ChildrenAstronautsJsonParentInternalOwner = 'childrenAstronautsJson___parent___internal___owner',
  ChildrenAstronautsJsonParentInternalType = 'childrenAstronautsJson___parent___internal___type',
  ChildrenAstronautsJsonParentParentChildren = 'childrenAstronautsJson___parent___parent___children',
  ChildrenAstronautsJsonParentParentId = 'childrenAstronautsJson___parent___parent___id',
  ChildrenAstronautsJsonUrl = 'childrenAstronautsJson___url',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkFileAbsolutePath = 'childrenMarkdownRemark___fileAbsolutePath',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childAstronautsJson?: InputMaybe<AstronautsJsonFilterInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenAstronautsJson?: InputMaybe<AstronautsJsonFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedOriginalName = 'fixed___originalName',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationHeight = 'fluid___presentationHeight',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidTracedSvg = 'fluid___tracedSVG',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeHeight = 'resize___height',
  ResizeOriginalName = 'resize___originalName',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width'
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Html = 'HTML',
  Markdown = 'MARKDOWN',
  Plain = 'PLAIN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  depth?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MarkdownHeadingFilterInput = {
  depth?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: InputMaybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  children: Array<Node>;
  excerpt?: Maybe<Scalars['String']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  tableOfContents?: Maybe<Scalars['String']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MarkdownWordCount>;
};


export type MarkdownRemarkExcerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>;
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  heading?: InputMaybe<Scalars['String']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MarkdownRemarkEdge>;
  group: Array<MarkdownRemarkGroupConnection>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Excerpt = 'excerpt',
  ExcerptAst = 'excerptAst',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterTitle = 'frontmatter___title',
  Headings = 'headings',
  HeadingsDepth = 'headings___depth',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  Html = 'html',
  HtmlAst = 'htmlAst',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  RawMarkdownBody = 'rawMarkdownBody',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words'
}

export type MarkdownRemarkFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: InputMaybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  edges: Array<MarkdownRemarkEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MarkdownRemarkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type Query = {
  __typename?: 'Query';
  allAstronautsJson: AstronautsJsonConnection;
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allMarkdownRemark: MarkdownRemarkConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  astronautsJson?: Maybe<AstronautsJson>;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  markdownRemark?: Maybe<MarkdownRemark>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};


export type QueryAllAstronautsJsonArgs = {
  filter?: InputMaybe<AstronautsJsonFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<AstronautsJsonSortInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MarkdownRemarkSortInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};


export type QueryAstronautsJsonArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  desc?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<FileFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childAstronautsJson?: InputMaybe<AstronautsJsonFilterInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMarkdownRemark?: InputMaybe<MarkdownRemarkFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenAstronautsJson?: InputMaybe<AstronautsJsonFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMarkdownRemark?: InputMaybe<MarkdownRemarkFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QueryMarkdownRemarkArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  excerptAst?: InputMaybe<JsonQueryOperatorInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  headings?: InputMaybe<MarkdownHeadingFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  htmlAst?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawMarkdownBody?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<StringQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  componentPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: InputMaybe<BooleanQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  pluginCreatorId?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<SitePluginPackageJsonFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<SitePluginPluginOptionsFilterInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataTitle = 'siteMetadata___title'
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  componentPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  matchPath?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  ComponentPath = 'componentPath',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  MatchPath = 'matchPath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorId = 'pluginCreatorId',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsDisplayName = 'pluginCreator___pluginOptions___displayName',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsFileName = 'pluginCreator___pluginOptions___fileName',
  PluginCreatorPluginOptionsFonts = 'pluginCreator___pluginOptions___fonts',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsMinify = 'pluginCreator___pluginOptions___minify',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsNamespace = 'pluginCreator___pluginOptions___namespace',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsPure = 'pluginCreator___pluginOptions___pure',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsTranspileTemplateLiterals = 'pluginCreator___pluginOptions___transpileTemplateLiterals',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  componentPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: InputMaybe<BooleanQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  pluginCreatorId?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<SitePluginPackageJson>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonMain = 'packageJson___main',
  PackageJsonName = 'packageJson___name',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonVersion = 'packageJson___version',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsDisplayName = 'pluginOptions___displayName',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsFileName = 'pluginOptions___fileName',
  PluginOptionsFonts = 'pluginOptions___fonts',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsMinify = 'pluginOptions___minify',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsNamespace = 'pluginOptions___namespace',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsPure = 'pluginOptions___pure',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsTranspileTemplateLiterals = 'pluginOptions___transpileTemplateLiterals',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<SitePluginPackageJsonFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<SitePluginPluginOptionsFilterInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  author?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  description?: Maybe<Scalars['String']>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  license?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: InputMaybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: InputMaybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  author?: InputMaybe<StringQueryOperatorInput>;
  dependencies?: InputMaybe<SitePluginPackageJsonDependenciesFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  devDependencies?: InputMaybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  keywords?: InputMaybe<StringQueryOperatorInput>;
  license?: InputMaybe<StringQueryOperatorInput>;
  main?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  peerDependencies?: InputMaybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: InputMaybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  allExtensions?: Maybe<Scalars['Boolean']>;
  background_color?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  cacheDigest?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  display?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['Boolean']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['Boolean']>;
  fonts?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  theme_color?: Maybe<Scalars['String']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  allExtensions?: InputMaybe<BooleanQueryOperatorInput>;
  background_color?: InputMaybe<StringQueryOperatorInput>;
  base64Width?: InputMaybe<IntQueryOperatorInput>;
  cacheDigest?: InputMaybe<StringQueryOperatorInput>;
  cache_busting_mode?: InputMaybe<StringQueryOperatorInput>;
  crossOrigin?: InputMaybe<StringQueryOperatorInput>;
  defaultQuality?: InputMaybe<IntQueryOperatorInput>;
  display?: InputMaybe<StringQueryOperatorInput>;
  displayName?: InputMaybe<BooleanQueryOperatorInput>;
  failOnError?: InputMaybe<BooleanQueryOperatorInput>;
  fileName?: InputMaybe<BooleanQueryOperatorInput>;
  fonts?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  include_favicon?: InputMaybe<BooleanQueryOperatorInput>;
  isTSX?: InputMaybe<BooleanQueryOperatorInput>;
  jsxPragma?: InputMaybe<StringQueryOperatorInput>;
  legacy?: InputMaybe<BooleanQueryOperatorInput>;
  minify?: InputMaybe<BooleanQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  namespace?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pathCheck?: InputMaybe<BooleanQueryOperatorInput>;
  pure?: InputMaybe<BooleanQueryOperatorInput>;
  short_name?: InputMaybe<StringQueryOperatorInput>;
  start_url?: InputMaybe<StringQueryOperatorInput>;
  stripMetadata?: InputMaybe<BooleanQueryOperatorInput>;
  theme_color?: InputMaybe<StringQueryOperatorInput>;
  theme_color_in_head?: InputMaybe<BooleanQueryOperatorInput>;
  transpileTemplateLiterals?: InputMaybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  author?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};
