# Training program of FE Department

## Content

### Introduce web fundamental

- Get familiar with Linux (W1)
  - Distro linux
  - Basic command
  - [Git](https://dev.to/lydiahallie/cs-visualized-useful-git-commands-37p1)
  - Working enviroment
    - Vscode
    - Zsh or fish shell
    - Oh-my-zsh
    - Yeakuake or Iterm
    - Auto jump

- Understanding the Browser (https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Introduction) (W2)
  - Protocol
    - HTTPS
    - HTTP
    - PORT

- HTMl (W2)
  - DOM Tree
  - Basic HTML Element
    - HTML Tags
- CSS (W2)
  - CSS selector
  - Layout
  - BEM
  - SCSS
  - Transition
- JS (W2 & W3)
  - Introduce ES6
    - Asynchronous: immediately, use when performant expensive and time-consuming. But dont use Asynchronous for everything
    - Event-loop
+for in : loop properties in object
+ for of: loop value in iterable object : Array, String...
    - Callback, promise
+Callback: gọi lại một function và sẽ được thực thi sau khi một function khác đã thực thi xong. Dùng trong các trường hợp yêu cầu các yêu cầu trước đó đã thực hiện xong
+Promise: thực hiện thao tác bất đồng bộ, có 2 kết quả trả về (thành công hoặc thất bại), sau đó các hàm đính kèm khác sẽ được thực hiện
    - Clouse: function lồng trong function cha, sử dụng biến toàn cục, cục bộ của cha.
    -Arrows function: không thể dùng tạo contrustor, phải dùng cú pháp ES6
    -this trong Arrows function đạ diện cho window object.

  - Introduce typescript
    - Why do we need typescript
    - Cons vs Pros
    - Experience when working with typing

- How to layout a website
  - Introduce flex-box, grid
  - Compare some use-case using float vs flex-box
  - What is mobile-first
- Demo html, css, js work together

### Introduce ReactJs

- What is virtual DOM
  - Cons vs Pros
- Component
  - Class component vs Functional component
  - Life-cycle
  - State
- State management
  - Context vs Redux

### Introduce framework @abx-react/foundation

- What is purpose of the Framework
- Core concept
  - URL State
  - Three-pannel Layout
  - Entity Layer
- Working process
