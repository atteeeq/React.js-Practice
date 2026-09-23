// const heading = document.createElement("h1");

// heading.innerHTML = "Hello World from JavaScript";

// const root = document.getElementById("root");

// root.appendChild(heading)

// React :---

// const heading = React.createElement("h1", {}, "Hello from React!");

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     className: "main-title",
//     customAttribute: "custom-value",
//   },
//   "Hello World",
// );

// React.createElement("h1", {}, "Hello World");

// React.createElement("div", {}, React.createElement("h1", {}, "Nested"));

// React.createElement("div", {}, [
//   React.createElement("h1", {}, "First"),
//   React.createElement("h2", {}, "second"),
// ]);

// const element  = React.createElement("h1", {} , "Hello");

// console.log(element);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am an H1 tag"),
//   )
// );

// console.log(parent);

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("h1", {}, "I am an h1 Tag"),
//   React.createElement("h2", {}, "I am an h2 Tag"),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// const complexStructure = React.createElement("div", { id: "container" }, [
//   React.createElement("div", { id: "header" }, [
//     React.createElement("h1", {}, "Website Title"),
//     React.createElement("p", {}, "Tagline here"),
//   ]),
//   React.createElement("div", { id: "main" }, [
//     React.createElement("div", { id: "main" }, [
//       React.createElement(
//         "div",
//         { id: "sidebar" },
//         React.createElement("ul", {}, [
//           React.createElement("li", {}, "Link 1"),
//           React.createElement("li", {}, "Link 2"),
//           React.createElement("li", {}, "Link 3"),
//         ]),
//       ),
//       React.createElement(
//         "div",
//         { id: "content" },
//         React.createElement("p", {}, "Main content here"),
//       ),
//     ]),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(complexStructure)

// create a complex structre

// const app = React.createElement("div", {}, [
//   React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Welcome to React "),
//   ),
//   React.createElement("div", {}, [
//     React.createElement("h2", {}, "Getting Started"),
//     React.createElement("p", {}, "This is my first React App!"),
//     React.createElement("ul", {}, [
//       React.createElement("li", {}, "learn React"),
//       React.createElement("li", {}, "Build Projects"),
//       React.createElement("li", {}, "Get a Job!"),
//     ]),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(app);

// console.log("React Element:", app);
// console.log("React Object:", React);
// console.log("ReactDOM Object:", ReactDOM);

