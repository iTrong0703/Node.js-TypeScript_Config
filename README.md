# Node.js-TypeScript_Config

Đây là cấu trúc thư mục của dự án

```bash
📦nodejs-typescript
 ┣ 📂dist
 ┣ 📂src
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜enum.ts
 ┃ ┃ ┣ 📜httpStatus.ts
 ┃ ┃ ┗ 📜message.ts
 ┃ ┣ 📂controllers
 ┃ ┃ ┗ 📜users.controllers.ts
 ┃ ┣ 📂middlewares
 ┃ ┃ ┣ 📜error.middlewares.ts
 ┃ ┃ ┣ 📜file.middlewares.ts
 ┃ ┃ ┣ 📜users.middlewares.ts
 ┃ ┃ ┗ 📜validation.middlewares.ts
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📂database
 ┃ ┃ ┃ ┣ 📜Blacklist.ts
 ┃ ┃ ┃ ┣ 📜Bookmark.ts
 ┃ ┃ ┃ ┣ 📜Follower.ts
 ┃ ┃ ┃ ┣ 📜Hashtag.ts
 ┃ ┃ ┃ ┣ 📜Like.ts
 ┃ ┃ ┃ ┣ 📜Media.ts
 ┃ ┃ ┃ ┣ 📜Tweet.ts
 ┃ ┃ ┃ ┗ 📜User.ts
 ┃ ┃ ┣ 📜Error.ts
 ┃ ┃ ┗ 📜Success.ts
 ┃ ┣ 📂routes
 ┃ ┃ ┗ 📜users.routes.ts
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜bookmarks.services.ts
 ┃ ┃ ┣ 📜database.services.ts
 ┃ ┃ ┣ 📜followers.services.ts
 ┃ ┃ ┣ 📜hashtags.services.ts
 ┃ ┃ ┣ 📜likes.services.ts
 ┃ ┃ ┣ 📜medias.services.ts
 ┃ ┃ ┣ 📜tweets.services.ts
 ┃ ┃ ┗ 📜users.services.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜crypto.ts
 ┃ ┃ ┣ 📜email.ts
 ┃ ┃ ┣ 📜file.ts
 ┃ ┃ ┣ 📜helpers.ts
 ┃ ┃ ┗ 📜jwt.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜type.d.ts
 ┣ 📜.editorconfig
 ┣ 📜.env
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc
 ┣ 📜nodemon.json
 ┣ 📜package.json
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
```

- **`dist`**: Thư mục chứa các file build
- **`src`**: Thư mục chứa mã nguồn
- **`src/constants`**: Chứa các file chứa các hằng số
- **`src/middlewares`**: Chứa các file chứa các hàm xử lý middleware, như validate, check token, ...
- **`src/controllers`**: Chứa các file nhận request, gọi đến service để xử lý logic nghiệp vụ, trả về response
- **`src/services`**: Chứa các file chứa method gọi đến database để xử lý logic nghiệp vụ
- **`src/models`**: Chứa các file chứa các model
- **`src/routes`**: Chứa các file chứa các route
- **`src/utils`**: Chứa các file chứa các hàm tiện ích, như mã hóa, gửi email, ...
- Còn lại là những file config cho project như **`.eslintrc`**, **`.prettierrc`**, ... mình sẽ giới thiệu ở bên dưới

## Tạo dự án Node.js

Sử dụng **`-y`** khi chạy lệnh **`npm init`** khi tạo file **`package.json`** để không cần nhập các thông tin về project. Chúng ta có thể vào file **`package.json`** để chỉnh sửa sau.

```jsx
npm init -y
```

## **Thêm TypeScript như một dev dependency**

Cài đặt typescript trong **`devDependency`** vì nó k tham gia vào production, nó chỉ hỗ trợ trong môi trường dev, khi build nó sẽ ra javascript

```jsx
npm install typescript --save-dev
```

## **Cài đặt kiểu dữ liệu TypeScript cho Node.js**

Vì ta dùng TypeScript để code Node.js nên chúng ta cần cài thêm kiểu dữ liệu cho Node.js là typescript.

```jsx
npm install @types/node --save-dev
```

Dùng gói `@types/node` thì việc sử dụng các hàm và module của Node.js sẽ trở nên an toàn hơn vì TypeScript có thể cảnh báo bạn về các lỗi tiềm ẩn nếu bạn sử dụng sai kiểu dữ liệu. Ví dụ, các API như `fs`, `http`, `path`, `os`, v.v., đều có kiểu định nghĩa trong gói `@types/node`.

## **Cài đặt các package config cần thiết còn lại**

Chúng ta cần cài đặt các package config cần thiết để làm việc với TypeScript như ESLint, Prettier, …

```jsx
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser ts-node tsc-alias tsconfig-paths rimraf nodemon --save-dev
```

- `eslint`: Linter (bộ kiểm tra lỗi) chính
- `prettier`: Code formatter chính
- `eslint-config-prettier`: Cấu hình ESLint để không bị xung đột với Prettier
- `eslint-plugin-prettier`: Dùng thêm một số rule prettier cho eslint
- `@typescript-eslint/eslint-plugin`: ESLint plugin cung cấp các rule cho Typescript
- `@typescript-eslint/parser`: Parser cho phép ESLint kiểm tra lỗi Typescript
- `ts-node`: Dùng để chạy TypeScript code trực tiếp mà không cần build
- `rimraf`: Dùng để xóa folder dist cũ trước khi build dist mới
- `nodemon`: Dùng để tự động restart server khi có sự thay đổi trong code

Nếu dùng `alias`

- `tsc-alias`: Xử lý alias khi build (Nếu dùng alias thì cài, không thì bỏ để tránh lỗi)
- `tsconfig-paths`: Khi setting alias import trong dự án dùng ts-node thì chúng ta cần dùng tsconfig-paths để nó hiểu được paths và baseUrl trong file tsconfig.json

## **Cấu hình tsconfig.json**

Tạo file **`tsconfig.json`** tại thư mục root, cùng cấp với `package.json`

Sau đó copy và paste đống code này vào:

```bash
{
"compilerOptions": {
"module": "NodeNext", // Quy định output module được sử dụng
"moduleResolution": "NodeNext",
"target": "ES2022", // Target output cho code
"outDir": "dist", // Đường dẫn output cho thư mục build
"esModuleInterop": true,
"strict": true /* Enable all strict type-checking options. */,
"skipLibCheck": true /* Skip type checking all .d.ts files. */,
"baseUrl": ".", // Đường dẫn base cho các import
"paths": {
"~/*": ["src/*"] // Đường dẫn tương đối cho các import (alias)
}
},
"ts-node": {
"require": ["tsconfig-paths/register"]
},
"files": ["src/type.d.ts"], // Các file dùng để defined global type cho dự án
"include": ["src/**/*"] // Đường dẫn include cho các file cần build
}
```

## **Cấu hình file config cho Prettier**

Cài Extensions Prettier:

Tạo file **`.prettierrc`** tại thư mục root, cùng cấp với `package.json`

Sau đó copy và pase code này vào:

```bash
{
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
}

```

Tiếp theo tạo file **`.prettierignore`** để bỏ qua các folder, file không cần format

```bash
# những file này tự động tạo, ta k đụng đến nên k cần check
node_modules/
dist/
```

## **Cấu hình file config cho ESLint**

Cài Extensions ESLint:

Tạo file **`.eslintrc`** tại thư mục root, cùng cấp với `package.json`
Sau đó copy và paste đống code này vào:

```bash
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "eslint-config-prettier", "prettier"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "always",
        "semi": false,
        "trailingComma": "none",
        "tabWidth": 2,
        "endOfLine": "auto",
        "useTabs": false,
        "singleQuote": true,
        "printWidth": 120,
        "jsxSingleQuote": true
      }
    ]
  }
}

```

**`.eslintrc`** giúp thiết lập quy tắc chung khi code chung, ví dụ cuối dòng code phải có ‘;’, không được dùng let,…

dùng `npm run lint` để check lỗi

Sau đó tạo file **`.eslintignore`** để ignore các file không cần kiểm tra lỗi

```bash
# những file này tự động tạo, ta k đụng đến nên k cần check
node_modules/
dist/
```

## **Config editor để chuẩn hóa cấu hình editor**

Cài Extensions **EditorConfig for VS Code**

Tạo file **`.editorconfig`** tại thư mục root, cùng cấp với `package.json`
Sau đó copy và paste đống code này vào:

```bash
[*]
indent_size = 2
indent_style = space
```

- [*] áp dụng cho tất cả
- **`indent_size = 2`**: Mỗi mức thụt lề trong mã nguồn sẽ được thực hiện bằng 2 ký tự khoảng trắng.
- **`indent_style = space`**: Sẽ sử dụng space để thụt lề, thay vì sử dụng tab.

## **Cấu hình file gitignore**

Giúp không push những code k cần thiết lên github

Tạo file **`.gitignore`** tại thư mục root, cùng cấp với `package.json`
Sau đó copy và paste đống code này vào:

```bash
node_modules/
dist/
```

## **Cấu hình file nodemon.json**

Giúp tự reset server khi có thay đổi trong code (ctrl + S)

Tạo file **`nodemon.json`** tại thư mục root, cùng cấp với `package.json`
Sau đó copy và paste đống code này vào:

```bash
{
  "watch": ["src"],
  "ext": ".ts,.js", # check các file có đuôi .ts, .js để reset nếu có thay đổi
  "ignore": [], # ko đụng vào những file nào
  "exec": "npx ts-node ./src/index.ts"
}
```

## **Cấu hình file package.json**

Mở file **`package.json`** lên, thay thế đoạn “scripts” này vào

```bash
  "scripts": {
    "dev": "npx nodemon",
    "build": "rimraf ./dist && tsc && tsc-alias",
    "start": "node dist/index.js",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "prettier": "prettier --check .",
    "prettier:fix": "prettier --write ."
  },
```

- `npm run dev` thì ta code trong môi trường dev
- `npm run build` build sang javascript (tạo ra thư mục dist)
- `npm run start` run code vừa build (phải build ra thư mục dist trước)

## **Tạo file `type.d.ts`**

Tạo thư mục **`src`** bên trong ta tạo file **`type.d.ts`**

Bên trong tạm thời chưa có gì

## **Tạo file `index.ts`**

Bên trong thư mục **`src`** tạo file **`index.ts`**

Và chạy thử đoạn code để test:

```tsx
const hello: string = 'Hello world!'
console.log(hello)
```

Chạy `npm run dev` để chạy code trên môi trường dev

## **Kiểm tra lỗi ESLint / Prettier**

### Câu lệnh này sẽ giúp bạn kiểm tra lỗi ESLint trong dự án

```
npm run lint
```

### Nếu bạn muốn ESLint tự động fix lỗi thì chạy câu lệnh sau

```
npm run lint:fix
```

### Tương tự với Prettier, ta có câu lệnh

```
npm run prettier
```

và

```
npm run prettier:fix
```

## **Build dự án TypeScript sang JavaScript cho production**

Có thể các bạn sẽ hỏi rằng tại sao phải build, để nguyên TypeScript thì luôn vẫn được mà. Đúng vậy nhưng khi build thì chúng ta sẽ có những lợi ích sau

- Code chạy được mà không cần cài đặt TypeScript
- Chạy nhanh hơn vì đã được biên dịch rồi
- Có thể minify code để giảm dung lượng
- Code chạy được trên những mội trường không hỗ trợ TypeScript

Để build thì chạy câu lệnh sau

```
npm run build
```

Tiếp theo chạy câu lệnh sau để chạy dự án, lưu ý câu lệnh này đòi hỏi bạn phải build trước để có code trong thư mục **`dist`**

```
npm run start
```

## **Lưu ý cài thêm gói `@types/ten-thu-vien` nếu cần**

Vì đây là dự án chạy với Typescript nên khi cài đặt bất cứ một thư viện này chúng ta nên xem thư viện đó có hỗ trợ TypeScript không nhé. Có một số thư viện ở npm hỗ trợ TypeScript sẵn, có một số thì chúng ta phải cài thêm bộ TypeScript của chúng qua **`@types/ten-thu-vien`**

Ví dụ như **`express`** thì chúng ta cài như sau
