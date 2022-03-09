module.exports = (app) => {

  const App = require("../controllers/app.controller");
  const Nft = require("../controllers/nft.controller")
  const Author = require("../controllers/author.controller")

  /**
   * @access public
   * @description Contact to the admin.
   */
  app.post("/api/create", App.create);

  app.get("/api/get-all", App.findAll);

  app.get("/api/message/:messageId", App.findOne);

  app.put("/api/message/:messageId", App.update);

  app.delete("/api/message/:messageId", App.delete);

  /**
   * @access public
   * @returns NFT details
   */
  app.post("/api/nft/create", Nft.create)

  app.get("/api/nft/get-one/:tokenId", Nft.findOne)

  app.get("/api/nft/get-all", Nft.findAll)

  app.get("/api/nft/get-owned/:currentOwner", Nft.findOwnedNft)

  app.get("/api/nft/get-created/:creator", Nft.findCreatedNft)

  app.put("/api/nft/update/:tokenId", Nft.updateNft)

  /**
   * @access public
   * @returns Author details
   */
  app.post("/api/author/create", Author.create)

  app.get("/api/author/get-all", Author.findAll)

  app.get("/api/author/get-one/:_id", Author.findOne)

  app.get("/api/author/get-current/:walletAddress", Author.findCurrentAuthor)

  app.put("/api/author/update/:walletAddress", Author.updateAuthor)

  app.put("/api/author/add-price/:walletAddress", Author.addPrice)
};
