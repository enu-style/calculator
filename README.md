# React Calculator

A simple, clean, and functional calculator application built with React.js.

## 🎯 Features

- ✅ Basic arithmetic operations (Addition, Subtraction, Multiplication, Division)
- ✅ Decimal number support
- ✅ Clear/Reset functionality (AC)
- ✅ Delete/Backspace (DEL)
- ✅ Positive/negative toggle (+/-)
- ✅ Chain calculations
- ✅ Division by zero error handling
- ✅ Clean, modern UI with dark theme
- ✅ Fully responsive design
- ✅ Smooth hover and active button states

## 🛠️ Technologies Used

- **React** 18.2.0 - UI library
- **Vite** 4.3.9 - Build tool and dev server
- **CSS3** - Styling (no UI frameworks)

## 📁 Project Structure

```
calculator/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Calculator.jsx    # Main calculator logic and state
│   │   ├── Display.jsx        # Display component
│   │   └── Button.jsx         # Reusable button component
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React DOM entry point
│   ├── App.css                # App styles
│   └── index.css              # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Installation

1. **Clone or download this repository**

2. **Install dependencies:**

```bash
npm install
```

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🎮 How to Use

1. Click number buttons (0-9) to enter numbers
2. Click operator buttons (+, -, ×, ÷) to select an operation
3. Click **=** to calculate the result
4. Click **AC** to clear everything
5. Click **DEL** to delete the last digit
6. Click **+/-** to toggle between positive and negative
7. Click **.** to add a decimal point

## 🧩 Component Details

### Calculator.jsx
Manages all calculator state and logic including:
- Number input handling
- Operator selection
- Calculation execution
- Clear, delete, and toggle operations

### Display.jsx
Presents the current value and operation in a clean format.

### Button.jsx
Reusable button component that accepts:
- `value` - Button label
- `onClick` - Click handler
- `className` - Additional CSS classes
- `type` - Button type (number, operator, function, equals)

## 📱 Responsive Design

The calculator adapts to different screen sizes:
- Desktop: Full size with optimal spacing
- Tablet: Adjusted padding and font sizes
- Mobile: Compact layout optimized for touch

## 🎨 UI Design

- **Dark theme** for comfortable viewing
- **Color-coded buttons:**
  - Gray: Numbers
  - Light gray: Functions (AC, DEL, +/-)
  - Orange: Operators (+, -, ×, ÷)
  - Green: Equals (=)
- **Smooth animations** on hover and click
- **Clear visual hierarchy** with proper spacing

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as a demonstration of React fundamentals and modern web development practices.
