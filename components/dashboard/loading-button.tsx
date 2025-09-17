import { Loader2 } from "lucide-react";
import { Button } from "../ui/button"

interface LoadingButtonProps { 
    type?: "submit" | "reset" | "button" | undefined;
    className?: string; 
    disabled?: boolean; 
    label: string; 
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({ type, className, disabled, label }) => {
    return (
        <Button type={type} size='sm' className={className && "mt-4 text-xs"} disabled={disabled}>
            {disabled ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
              </>
            ) : 
              label
            }
        </Button>
    )
}