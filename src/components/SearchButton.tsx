import { Button } from "@/components/ui/button";

interface SearchButtonProps {
    onClick: () => void;
}

export function SearchButton({ onClick }: SearchButtonProps) {
    return (
        <Button
            onClick={onClick}
            className="w-full bg-[#5c8252] hover:bg-[#8A9B7A] text-white"
        >
            Search
        </Button>
    );
}
