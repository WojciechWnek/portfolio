"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from '../ui/button'

const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "light" ? <Moon /> : <Sun />}
        </Button>
    )
}

export default DarkModeToggle