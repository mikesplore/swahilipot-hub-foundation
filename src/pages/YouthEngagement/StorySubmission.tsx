import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import React from "react";

interface StorySubmissionProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const StorySubmission: React.FC<StorySubmissionProps> = ({ isOpen, onOpenChange }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Share Your Story</DialogTitle>
                    <DialogDescription>
                        Tell us how Swahilipot Hub has impacted your life. Your story could inspire others to join our community.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="name">Name</label>
                            <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="age">Age</label>
                            <Input id="age" placeholder="Your age" type="number" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="location">Location</label>
                            <Input id="location" placeholder="Where you're from" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <label htmlFor="title">Title/Role</label>
                            <Input id="title" placeholder="Your title or role" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <label htmlFor="story">Your Story</label>
                        <Textarea
                            id="story"
                            placeholder="Share how Swahilipot Hub has impacted your life..."
                            className="min-h-[120px]"
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <label htmlFor="email">Email Address</label>
                        <Input id="email" placeholder="your.email@example.com" type="email" />
                        <p className="text-xs text-gray-500 mt-1">We'll contact you if we select your story to feature.</p>
                    </div>
                </div>
                <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                    <Button type="submit">Submit Story</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
};
export default StorySubmission;