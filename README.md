# React Calculator

A simple calculator built with React. Does basic math and looks pretty good doing it.

## What it does

- Add, subtract, multiply, and divide
- Works with decimals
- AC button clears everything
- DEL removes the last number you typed
- +/- switches between positive and negative
- You can chain calculations together
- Won't let you divide by zero (sorry)
- Dark theme that's easy on the eyes
- Works on mobile and desktop

## Tech Stack

Built with React and Vite. Just plain CSS for styling, no fancy frameworks needed.

## Getting Started

First, install everything:

```bash
npm install
```

Then run it:

```bash
npm run dev
```

Open your browser to `http://localhost:5173` and you're good to go.

## Building for Production

Want to deploy it? Build it first:

```bash
npm run build
```

## How to Use

Pretty straightforward - click the numbers and operators like you would on any calculator. Hit equals when you want the answer. AC clears everything, DEL removes the last digit.

## Project Structure

```
src/
├── components/
│   ├── Calculator.jsx    # Main logic lives here
│   ├── Display.jsx        # Shows your numbers
│   └── Button.jsx         # Reusable button
├── App.jsx
├── main.jsx
└── styles...
```

The Calculator component handles all the math and state. Display just shows what you're typing. Button is a simple component used for all the calculator buttons.

## Design Notes

Went with a dark theme because calculators always look better that way. Orange for operators, green for equals, gray for everything else. Buttons have a little bounce when you click them.

It's responsive too - scales down nicely on phones.

## License

Free to use however you want.
