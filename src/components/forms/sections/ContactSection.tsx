import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

interface ContactSectionProps {
  data: any;
  handleChange: any;
  addItem: (section: string) => void;
  removeItem: (section: string, index: number) => void;
  moveItem?: (section: string, fromIndex: number, toIndex: number) => void; // Added for ordering
}

const contactTypes = [
  { icon: "github", label: "GitHub", baseUrl: "https://github.com/" },
  { icon: "gitlab", label: "GitLab", baseUrl: "https://gitlab.com/" },
  { icon: "linkedin", label: "LinkedIn", baseUrl: "https://linkedin.com/in/" },
  { icon: "x-twitter", label: "Twitter", baseUrl: "https://x.com/" },
  { icon: "email", label: "Email", baseUrl: "mailto:" },
  { icon: "phone", label: "Phone", baseUrl: "tel:" },
  { icon: "microsoft", label: "Microsoft Learn", baseUrl: "https://learn.microsoft.com/en-us/users/" },
];

export default function ContactSection({
  data,
  handleChange,
  moveItem, // Added for ordering
}: ContactSectionProps) {
  const handleContactLinkChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    contactType: string
  ) => {
    const value = e.target.value.trim();

    const contactTypeInfo = contactTypes.find((ct) => ct.icon === contactType);
    if (contactTypeInfo) {
      let fullValue = value;
      let displayValue = value;

      if (contactType === "email" || contactType === "phone") {
        fullValue = contactTypeInfo.baseUrl + value;
        displayValue = value;
      } else {
        if (!value.startsWith("http://") && !value.startsWith("https://")) {
          const cleanValue = value.replace(
            /^[\/]+|^(https?:\/\/)?(www\.)?[^\/]+\//i,
            ""
          );
          fullValue = contactTypeInfo.baseUrl + cleanValue;

          // Check if the username is longer than 21 characters
          if (cleanValue.length > 15) {
            displayValue = cleanValue;
          } else {
            displayValue =
              contactTypeInfo.baseUrl.replace("https://", "") + cleanValue;
          }
        }
      }

      // Update ContactLink
      handleChange(
        {
          target: { value: fullValue, type: "text" },
        },
        "ContactData",
        contactType,
        "ContactLink"
      );

      // Update ContactText to match the display value
      handleChange(
        {
          target: { value: displayValue, type: "text" },
        },
        "ContactData",
        contactType,
        "ContactText"
      );
    }
  };

  const handleDisplayTextChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    contactType: string
  ) => {
    // Only update the ContactText, not the ContactLink
    handleChange(e, "ContactData", contactType, "ContactText");
  };

  // Helper to get the index of a contact type in ContactData
  const getContactIndex = (icon: string) =>
    data.ContactData.findIndex((c: any) => c.ContactIcon === icon);

  return (
    <div className="space-y-4">
      {contactTypes.map((contactType) => {
        const contactData = data.ContactData.find(
          (c: any) => c.ContactIcon === contactType.icon
        ) || {
          ContactIcon: contactType.icon,
          isEnabled: false,
          ContactLink: "",
          ContactText: "",
        };

        const inputValue = contactData.ContactLink.replace(
          contactType.baseUrl,
          ""
        );

        // Find the index of this contact in the current ContactData array
        const contactIndex = getContactIndex(contactType.icon);

        return (
          <div key={contactType.icon} className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id={`contact-enabled-${contactType.icon}`}
                checked={contactData.isEnabled}
                onCheckedChange={(checked) =>
                  handleChange(
                    { target: { type: "checkbox", checked } },
                    "ContactData",
                    contactType.icon,
                    "isEnabled"
                  )
                }
              />
              <Label htmlFor={`contact-enabled-${contactType.icon}`}>
                  {contactType.icon === "microsoft" ? (
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                      <Image 
                        src="/microsoft-logo.svg" 
                        alt="Microsoft Logo" 
                        width={20} 
                        height={20} 
                        style={{ marginRight: 6, display: "inline-block", verticalAlign: "middle" }} 
                      />
                      {contactType.label}
                    </span>
                  ) : (
                    contactType.label
                  )}
              </Label>
              {/* Add up/down buttons for ordering */}
              {contactData.isEnabled && moveItem && (
                <div className="flex flex-col ml-2">
                  <button
                    type="button"
                    aria-label="Move up"
                    className="text-xs px-1 py-0.5 border rounded disabled:opacity-50"
                    disabled={contactIndex <= 0}
                    onClick={() =>
                      moveItem("ContactData", contactIndex, contactIndex - 1)
                    }
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    aria-label="Move down"
                    className="text-xs px-1 py-0.5 border rounded disabled:opacity-50"
                    disabled={
                      contactIndex === -1 ||
                      contactIndex >= data.ContactData.length - 1
                    }
                    onClick={() =>
                      moveItem("ContactData", contactIndex, contactIndex + 1)
                    }
                  >
                    ▼
                  </button>
                </div>
              )}
            </div>
            {contactData.isEnabled && (
              <div className="grid lg:grid-cols-2 gap-2 xl:gap-4">
                <div className="space-y-1">
                  <Label htmlFor={`contact-link-${contactType.icon}`}>
                    {contactType.icon === "email"
                      ? "Email Address"
                      : contactType.icon === "phone"
                      ? "Phone Number"
                      : contactType.icon === "microsoft"
                      ? "Microsoft Learn Username"
                      : "Username"}
                  </Label>
                  <Input
                    id={`contact-link-${contactType.icon}`}
                    type="text"
                    value={inputValue}
                    onChange={(e) =>
                      handleContactLinkChange(e, contactType.icon)
                    }
                    placeholder={`Enter ${contactType.label} ${
                      contactType.icon === "email"
                        ? "address"
                        : contactType.icon === "phone"
                        ? "number"
                        : contactType.icon === "microsoft"
                        ? "username"
                        : "username"
                    }`}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor={`contact-text-${contactType.icon}`}>
                    Display Text
                  </Label>
                  <Input
                    id={`contact-text-${contactType.icon}`}
                    value={contactData.ContactText}
                    onChange={(e) =>
                      handleDisplayTextChange(e, contactType.icon)
                    }
                    placeholder={`${contactType.label} Display Text`}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
