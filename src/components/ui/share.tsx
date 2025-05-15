import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@components/ui/popover";
import { Button } from "@components/ui/button";
import { Share2, Twitter, Mail, Link } from "lucide-react";
import { Command, CommandItem } from "@components/ui/command"; // Assuming you're using a Command UI component
export default function Share({ id, className }) {
  const shareUrl = `https://nannuru.com/articles/${id}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={className}>
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-0 space-y-2">
        <Command>
          <CommandItem onSelect={copyToClipboard}>
            <Link className="w-4 h-4 mr-2" />
            Copy Link
          </CommandItem>
          <CommandItem
            onSelect={() =>
              window.open(
                `https://twitter.com/share?url=${shareUrl}&text=${document.title}&via=nannuru`,
                "_blank"
              )
            }
          >
            <Twitter className="w-4 h-4 mr-2 text-blue-500" />
            Share on Twitter
          </CommandItem>
          <CommandItem
            onSelect={() =>
              window.open(
                `mailto:?subject=Check this out&body=${shareUrl}`,
                "_blank"
              )
            }
          >
            <Mail className="w-4 h-4 mr-2" />
            Share via Email
          </CommandItem>
          <CommandItem
            onSelect={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=https://nannuru.com/articles/${id}`,
                "_blank"
              )
            }
          >
            <img
              src="/2048px-Facebook-f-logo-2021-svg-removebg-preview.png"
              alt="Facebook"
              width={16}
              height={16}
              className="mr-2"
            />
            Share on Facebook
          </CommandItem>

          <CommandItem
            onSelect={() =>
              window.open(
                `https://api.whatsapp.com/send?text=${shareUrl}`,
                "_blank"
              )
            }
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width={16}
              height={16}
              className="mr-2"
            />
            Share on WhatsApp
          </CommandItem>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
