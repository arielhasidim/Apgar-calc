import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

const TermsDialog = () => {
  const [open, setOpen] = useState(false);
  const [rememberChoice, setRememberChoice] = useState(false);

  useEffect(() => {
    // Check if user has previously accepted terms
    const hasAccepted = localStorage.getItem('termsAccepted');
    // if (!hasAccepted) {
    //   setOpen(true);
    // }
    setOpen(true);
  }, []);

  const handleAccept = () => {
    if (rememberChoice) {
      localStorage.setItem('termsAccepted', 'true');
    }
    setOpen(false);
  };

  // Handle dialog close attempt
  const handleClose = () => {
    // Prevent closing by doing nothing
    // Dialog can only be closed by accepting terms
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-11/12 max-w-2xl rounded-lg md:w-full [&>button]:hidden" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            גילוי נאות והסרת אחריות
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] w-full rounded-md border p-4">
          <DialogDescription className="text-right whitespace-pre-wrap leading-relaxed" dir="rtl">
            {`מחשבון APGAR זה ("המחשבון") מסופק כשירות לציבור למטרות מידע והערכה כללית בלבד. המחשבון נועד לשמש ככלי עזר בלבד ואינו מהווה תחליף לשיקול דעת רפואי מקצועי. התוצאות המתקבלות מהמחשבון אינן מהוות אבחנה רפואית או המלצה לטיפול, ואין להסתמך עליהן כבסיס יחיד לקבלת החלטות רפואיות.

מפתחי ומפעילי המחשבון אינם אחראים לכל נזק ישיר או עקיף שעלול להיגרם כתוצאה משימוש במחשבון. המידע מסופק "כפי שהוא" (AS IS), ללא כל אחריות מפורשת או משתמעת, ואין כל התחייבות לדיוק, שלמות, או אמינות המידע המוצג במחשבון.

השימוש במחשבון הינו באחריות המשתמש בלבד. מפתחי המחשבון שומרים לעצמם את הזכות לשנות, לעדכן או להסיר תכנים מהמחשבון בכל עת, ותנאי גילוי נאות זה עשויים להתעדכן מעת לעת ללא הודעה מוקדמת.

שימוש במחשבון מהווה הסכמה לתנאים המפורטים לעיל.

גרסה: 1.0
תאריך עדכון אחרון: 26.12.2024`}
          </DialogDescription>
        </ScrollArea>

        {/* <div className="flex items-center space-x-2 space-x-reverse pt-4">
          <Checkbox 
            id="remember" 
            checked={rememberChoice}
            onCheckedChange={setRememberChoice}
          />
          <label 
            htmlFor="remember" 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            זכור את הסכמתי בפעם הבאה
          </label>
        </div> */}

        <DialogFooter className="sm:justify-start">
          <Button 
            className="w-full text-lg py-6" 
            onClick={handleAccept}
          >
            אני מסכים
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TermsDialog;