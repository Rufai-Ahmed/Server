// // import http, { IncomingMessage, ServerResponse } from "http";

// // const port: number = 4000;

// // interface iData {
// //   name: string;
// //   id: number;
// // }

// // interface iMessage {
// //   message: string;
// //   data: {} | null | {}[];
// //   success: boolean;
// // }

// // const info: iData[] = [
// //   {
// //     name: "Lucky",
// //     id: 1,
// //   },
// //   {
// //     name: "Nzube",
// //     id: 90,
// //   },
// // ];

// // const server = http.createServer(
// //   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
// //     res.setHeader("content-type", "Application/JSON");

// //     let status = 404;
// //     const container: any = [];
// //     const Response: iMessage = {
// //       message: "Compilation failed",
// //       success: false,
// //       data: null,
// //     };
// //     const { url, method } = req;
// //     req
// //       .on("data", (chunk: any) => {
// //         container.push(chunk);
// //       })
// //       .on("end", () => {
// //         if (url === "/" && method === "GET") {
// //           status = 200;
// //           Response.message = "Success";
// //           Response.success = true;
// //           Response.data = info;
// //           res.write(JSON.stringify({ Response, status }));
// //           res.end();
// //         }
// //         if (url === "/" && method === "POST") {
// //           status = 201;
// //           Response.message = "updated";
// //           Response.success = true;
// //           Response.data = info;
// //           const body = JSON.parse(container);
// //           info.push(body);
// //           res.write(JSON.stringify({ Response, status }));
// //           res.end();
// //         }
// //       });
// //   }
// // );

// // server.listen(port, () => {
// //   console.log("Noon");
// // });
// import http, { IncomingMessage, ServerResponse } from "http";

// const port: number = 4000;

// interface iData {
//   name: string;
//   id: number;
// }

// interface iMessage {
//   message: string;
//   data: {} | null | {}[];
//   success: boolean;
// }

// const info: iData[] = [
//   {
//     name: "Lucky",
//     id: 1,
//   },
//   {
//     name: "Nzube",
//     id: 90,
//   },
// ];

// const server = http.createServer(
//   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     res.setHeader("content-type", "Application/JSON");

//     let status = 404;
//     const container: any = [];
//     const Response: iMessage = {
//       message: "Compilation failed",
//       success: false,
//       data: null,
//     };
//     const { url, method } = req;
//     req
//       .on("data", (chunk: any) => {
//         container.push(chunk);
//       })
//       .on("end", () => {
//         if (url === "/" && method === "GET") {
//           status = 200;
//           Response.message = "Success";
//           Response.success = true;
//           Response.data = info;
//           res.write(JSON.stringify({ Response, status }));
//           res.end();
//         }
//         if (url === "/" && method === "POST") {
//           status = 201;
//           Response.message = "updated";
//           Response.success = true;
//           Response.data = info;
//           const body = JSON.parse(container);
//           info.push(body);
//           res.write(JSON.stringify({ Response, status }));
//           res.end();
//         }
//       });
//   }
// );

// server.listen(port, () => {
//   console.log("Noon");
// });
import http, { IncomingMessage, ServerResponse } from "http";

const port: number = 4000;

interface iData {
  name: string;
  id: number;
}

interface iMessage {
  message: string;
  data: {} | null | {}[];
  success: boolean;
}

const info: iData[] = [
  {
    name: "Lucky",
    id: 1,
  },
  {
    name: "Nzube",
    id: 90,
  },
];

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.setHeader("content-type", "Application/JSON");

    let status = 404;
    const container: any = [];
    const Response: iMessage = {
      message: "Compilation failed",
      success: false,
      data: null,
    };
    const { url, method } = req;
    req
      .on("data", (chunk: any) => {
        container.push(chunk);
      })
      .on("end", () => {
        if (url === "/" && method === "GET") {
          status = 200;
          Response.message = "Success";
          Response.success = true;
          Response.data = info;
          res.write(JSON.stringify({ Response, status }));
          res.end();
        }
        if (url === "/" && method === "POST") {
          status = 201;
          Response.message = "updated";
          Response.success = true;
          Response.data = info;
          const body = JSON.parse(container);
          info.push(body);
          res.write(JSON.stringify({ Response, status }));
          res.end();
        }
      });
  }
);

server.listen(port, () => {
  console.log("Noon");
});
