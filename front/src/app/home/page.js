"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { History, ReceiptText, User, UserRoundPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import EditProfile from "@/components/EditProfile";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [edit, setEdit] = useState(false);

  const onEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#2a2c41]">
      <div className="w-[90%] flex justify-between mb-3">
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Recipes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Advices</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="bg-[#ff724c] flex justify-center items-center w-[40px] h-[40px] rounded-full">
          <Sheet>
            <SheetTrigger className="flex justify-center items-center">
              <User color="white" size={24} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="h-full flex flex-col justify-between items-start">
                <div className="flex flex-col justify-between items-start gap-10">
                  <SheetTitle className="montserrat text-[22px]">
                    My profile
                  </SheetTitle>
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex flex-col justify-start items-start gap-3">
                      <div className="flex justify-start items-center gap-3">
                        {" "}
                        <UserRoundPen />
                        <button onClick={onEdit}>Edit Profile</button>{" "}
                      </div>

                      {edit ? <EditProfile /> : null}
                    </div>
                    <div className="flex justify-start items-center gap-3">
                      <History />
                      <button>History</button>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                      <ReceiptText />
                      <button>Terms and conditions</button>
                    </div>
                  </div>
                </div>
                <Button className="w-fit h-fit py-2 px-4 bg-[#ff724c] rounded-md">
                  <Dialog>
                    <DialogTrigger>Log out</DialogTrigger>
                    <DialogContent className="w-[300px]">
                      <DialogHeader>
                        <DialogTitle>Are you sure logging out?</DialogTitle>
                        <DialogDescription>
                          You are loggin out
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                          <div className="w-full flex justify-between">
                            <Button
                              type="button"
                              variant="secondary"
                              className="bg-[#ff724c] "
                            >
                              Close
                            </Button>
                            <Button
                              type="button"
                              variant="secondary"
                              className="bg-[#b4b4b4]"
                              onClick={() => router.push("/")}
                            >
                              Log out
                            </Button>
                          </div>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </Button>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="w-[90%] h-[90%] flex justify-center items-center rounded-xl  ">
        <div className="w-1/2 h-full bg-[#f4f3f8] rounded-l-xl flex flex-coljustify-center items-center py-8 px-6 gap-6">
          <div className="w-full h-full flex justify-center items-center border border-gray-300 rounded-md">
            CONTENT
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-between gap-2 py-8 px-6 bg-[#f4f3f8] rounded-r-xl">
          <div className="w-full h-1/2 flex justify-center items-center bg-[#7c7c7b]/50 rounded-md">
            CONTENT
          </div>
          <div className="w-full h-1/2 flex justify-center items-center bg-[#fcc050]/50 rounded-md">
            CONTENT
          </div>
        </div>
      </div>
    </div>
  );
}
