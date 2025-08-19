import { IAttachmentInfo, IContact } from "@/shared/types/contact";
import { Schema, model } from "mongoose";

const attachmentSchema = new Schema<IAttachmentInfo>({
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  fileType: { type: String, required: true },
  fileSize: { type: Number, required: true },
});

const contactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    organization: { type: String },
    serviceType: {
      type: String,
      enum: ["web-development", "mobile-app", "ui-ux", "seo", "other"],
      required: true,
    },
    budgetRange: { type: String },
    timeline: { type: String },
    projectDescription: { type: String, required: true },
    agreeToTerms: { type: Boolean, required: true },
    attachments: [attachmentSchema],
  },
  { timestamps: true }
);

export const ContactModel = model<IContact>("Contact", contactSchema);
