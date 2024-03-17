import app from "./app";

export default function startServer() {
  const port = process.env.PORT || 8001;

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}
