"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { filterText } from "@/lib/filtering";
import { useState } from "react";

export default function Home() {
  const [textToFilter, setTextToFilter] = useState<string | undefined>()
  const [filterResponse, setFilterResponse] = useState<string | undefined>()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="flex flex-col min-h-screen items-center justify-center space-y-3">
      <Dialog open={modalOpen}>
        <DialogContent onClick={() => {
          setModalOpen(false)
        }} onEscapeKeyDown={() => {
          setModalOpen(false)
        }}>
          <DialogHeader>
            <DialogTitle>Filtered Text</DialogTitle>
            <DialogDescription>
              Was Filtered: {filterResponse == textToFilter && "false" || "true"}
              <br/>
              Text: {filterResponse}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <h1 className="font-bold text-4xl">Text Filter</h1>
      <p>Testing for the obscenity profanity filter.</p>
      <Input className="w-72" onChange={(changed) => {
        setTextToFilter(changed.target.value)
      }} />
      <Button onClick={async () => {
        const response = await filterText(textToFilter || "")

        setFilterResponse(response)
        setModalOpen(true)
      }} >
        Test
      </Button>
    </main>
  );
}
