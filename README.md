# OnePlus‑Style Web Calculator

A sleek, OnePlus‑inspired calculator built with **HTML**, **CSS**, and **JavaScript**.  
Mimics the perfectly flat, clean aesthetic of the **OnePlus OxygenOS 11** calculator in dark mode, complete with an expandable scientific layout, ripple effects, smooth transitions, and correct percentage calculations.

🌐 **Live Demo:**  
🔗 [neversettlecalc.netlify.app](https://neversettlecalc.netlify.app/)
---

## 🚀 Features

- **OxygenOS 11 Flat Design**:
  - Deep flat black backgrounds with clean, borderless layouts.
  - Signature OnePlus red accent (`#EB0028`) for the equals button and special active states.
- **Dynamic Scientific Mode**:
  - Click the expand button (`⇿`) to smoothly transition into a wider, fully-featured scientific calculator.
  - Features 16 advanced mathematical functions including trigonometry, logarithms, powers, and factorials (`!`).
  - **`INV` Toggle**: A dynamic toggle that instantly swaps standard functions for their mathematical inverses (e.g., `sin` -> `asin`, `log` -> `10^x`).
- **Smooth Micro-Interactions**:
  - Native ripple click effect on each button, fading out abruptly at max size.
  - Fluid fade-in/out transitions for the display placeholder.
  - The calculator gracefully widens and scales button sizes when expanding to scientific mode.
- **Robust Math Engine**:
  - **Correct percentage handling**: `100 + 10%` → `110`, `5%8` → `0.4`, `50%` → `0.5`.
  - Built-in support for evaluating complex strings using safe Math substitutions.
- **The "Never Settle" Easter Egg**: 
  - Type `1+=` to trigger the iconic OnePlus easter egg, shifting the display into the signature red.

---

## 💻 Getting Started

1. **Clone or download** this repo.
2. Ensure the font files (`.ttf`) are in the same folder as your HTML/CSS.
3. Open `index.html` in your browser.

_No build tools or npm required — just plain HTML/CSS/JS!_

---

## 🔧 Usage

- **Click** numbers or operators to build expressions.
- **`⇿` (Expand)** slides out the scientific keypad.
- **`INV`** toggles inverse trigonometric and logarithmic functions.
- **`=`** evaluates the expression.
- **`%`** acts as a percentage operator.
- **`AC`** resets the calculator.
- **`⌫`** deletes the last character.

---

> Crafted with ♥ following the OnePlus design language.  
> “Never Settle” — OnePlus.
