import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareGitlab,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSquareEnvelope,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import { ResumeData } from "@/app/types/ResumeData";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ContactProps {
  data: ResumeData;
}

const contactOrder = [
  "github",
  "gitlab",
  "linkedin",
  "x-twitter",
  "email",
  "phone",
  "microsoft",
];
export default function Contact({ data }: ContactProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return faSquareGithub;
      case "gitlab":
        return faSquareGitlab;
      case "linkedin":
        return faLinkedin;
      case "x-twitter":
        return faSquareXTwitter;
      case "email":
        return faSquareEnvelope;
      case "phone":
        return faSquarePhone;
      case "microsoft":
        return "microsoft";
      default:
        return null;
    }
  };

  const sortedContactData = contactOrder
    .map((icon) =>
      data.ContactData.find((contact) => contact.ContactIcon === icon)
    )
    .filter((contact) => contact && contact.isEnabled);
  return (
    <>
      <section className="bg-mono_background">
        <ul className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2">
          {sortedContactData.map((contact, id) => (
            <li key={id}>
              <span className="font-semibold text-mono_primary">
                {contact!.ContactIcon === "microsoft" ? (
                  <span style={{ display: "inline-block", width: "1", height: "1", verticalAlign: "middle" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%">
                      <rect x="2" y="2" width="20" height="20" fill="currentColor"/>
                      <rect x="26" y="2" width="20" height="20" fill="currentColor"/>
                      <rect x="2" y="26" width="20" height="20" fill="currentColor"/>
                      <rect x="26" y="26" width="20" height="20" fill="currentColor"/>
                    </svg>
                  </span>
                ) : (
                  <FontAwesomeIcon
                    icon={getIcon(contact!.ContactIcon) as IconProp}
                    size="lg"
                  />
                )}
                <span className="-tracking-widest select-none"> </span>
              </span>
              <a href={contact!.ContactLink} target="_noref">
                <span className="hover:text-mono_primary text-mono_secondary hover:underline">
                  {contact!.ContactIcon === "microsoft"
                    ? (() => {
                        // Extract username from the ContactLink (last segment after last slash)
                        const link = contact!.ContactLink || "";
                        const username = link.split("/").filter(Boolean).pop() || contact!.ContactText;
                        return username;
                      })()
                    : contact!.ContactText}
                  {!data.ResumeConfig.ResumeHasPDFPreview && (
                    <span className="text-mono_primary opacity-50 print:hidden inline-flex align-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-auto h-4"
                      >
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                      </svg>
                    </span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
