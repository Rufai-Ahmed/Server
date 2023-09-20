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
    const container: any = [];
    let status = 404;

    let response: iMessage = {
      message: "Failed to compile 😥",
      success: true,
      data: null,
    };

    req
      .on("data", (chunk: any) => {
        container.push(chunk);
      })
      .on("end", () => {
        let { url, method } = req;
        if (url === "/" && method === "GET") {
          status = 200;
          response.message = "Compiled fully";
          response.success = true;
          response.data = info;
          res.write(JSON.stringify({ response, status }));
          res.end();
        }
        if (url === "/" && method === "POST") {
          status = 201;
          response.message = "compilation updated";
          response.success = true;
          response.data = info;
          const body = JSON.parse(container);
          info.push(body);
          res.write(JSON.stringify({ response, status }));
          res.end();
        }
      });
  }
);

server.listen(port, () => {
  console.log("Noon");
});
