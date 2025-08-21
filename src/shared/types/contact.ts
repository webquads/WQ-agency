export interface IAttachmentInfo {
  fileName: string;
  fileUrl: string; // where the file is stored (S3, Cloudinary, etc.)
  fileType: string; // MIME type (pdf, docx, png, etc.)
  fileSize: number;
}
export interface IContact {
  name: string;
  email: string;
  phone: string;
  country?: string;
  organization?: string;
  websiteUrl?: string;
  referenceSiteUrl?: string;
  serviceType: "web-development" | "mobile-apps" | "seo" | "" | "other";
  budgetRange: string; // example: "$1000 - $3000"
  timeline?: string; // example: "1-3 months"
  projectDescription: string;
  attachments?: IAttachmentInfo[];
  agreeToTerms: boolean;
  createdAt: Date;
  updatedAt: Date;
}
