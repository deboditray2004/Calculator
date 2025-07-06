# OnePlus‑Style Web Calculator

A sleek, OnePlus‑inspired calculator built with **HTML**, **CSS**, and **JavaScript**.  
Mimics the look and feel of the OnePlus OxygenOS calculator in dark mode, complete with ripple effects, smooth fade‑in/out transitions, and correct percentage calculations.

🌐 **Live Demo:**  
🔗 [neversettlecalc.netlify.app](https://neversettlecalc.netlify.app/)
---

## 🚀 Features

- **Dark‑mode UI** with OnePlus colors:
  - Deep charcoal backgrounds (`#121212`, `#1a1a1a`)
  - OnePlus red accent (`#EB0028`) for the equals button
- **Ripple click effect** on each button, fading out abruptly at max size
- **Smooth fade transition** for the display when:
  - Replacing “Calculator” placeholder with user input or result
  - Restoring “Calculator” when cleared
- **Correct percentage handling**:
  - `100 + 10%` → `110`
  - `5%8` → `0.4`
  - `50%` → `0.5`
- **Utility buttons**:
  - `AC` (clear all)
  - `⌫` (delete last digit)
  - `<>` expand button (placeholder for scientific mode)

---

## 💻 Getting Started

1. **Clone or download** this repo.
2. Ensure the font files (`.ttf`) are in the same folder as your HTML/CSS.
3. Open `index.html` in your browser.

_No build tools or npm required — just plain HTML/CSS/JS!_

---

## 🔧 Usage

- **Click** numbers or operators to build expressions.
- **`=`** evaluates the expression.
- **`%`** acts as a percentage operator.
- **`AC`** resets to the “Calculator” placeholder.
- **`⌫`** deletes the last character; if nothing remains, it restores “Calculator.”


---

> Crafted with ♥ following the OnePlus design language.  
> “Never Settle” — OnePlus.
