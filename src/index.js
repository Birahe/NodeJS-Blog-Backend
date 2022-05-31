const { init } = require("./utils/database");
const app = require("./app");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
(async () => await init())();
