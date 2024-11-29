import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";



const AddResume = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [resumeTitle, setResumeTitle] = useState(null)
    
    const OnCreate = () => {
        const uuid = uuidv4()
      console.log(resumeTitle, uuid)
      setOpenDialog(false)
    }
  return (
    <div>
      <div className="p-14 py-24 border flex items-center justify-center bg-secondary rounded-lg h-[280px] w-52 hover:scale-105 transition-all hover:shadow-lg cursor-pointer border-dashed" onClick={()=>setOpenDialog(true)}>
        <PlusSquare />
      </div>
      <Dialog open={openDialog}>
       
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
                          <p>Add title for your new resume</p>
                          <Input className="my-2" placeholder="Ex. full stack resume" onChange={(e) => setResumeTitle(e.target.value)} />
                      </DialogDescription>
                      <div className='flex justify-end gap-3'>
                          <Button variant="ghost" onClick={()=>setOpenDialog(false)}>cancle</Button>
                          <Button onClick={()=>OnCreate()} disabled={!resumeTitle}>Create</Button>
                      </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume