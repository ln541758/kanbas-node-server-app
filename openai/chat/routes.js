import OpenAI from "openai";
const openai = new OpenAI();
const conversation = [];
export default function ChatRoutes(app) {
  const getConversation = (req, res) => res.json(conversation);
  const postChat = async (req, res) => {
    const userMessage = req.body;
    chat.push(userMessage);
    const completion = await openai.chat.completions.create({
      messages: conversation,
      model: "gpt-4",
    });
    const choice = completion.choices[0];
    conversation.push(choice.message);
    res.json(choice.message);
  };
  const shapeMap = {
    square: "1024x1024",
    portrait: "1024x1792",
    landscape: "1792x1024",
  };
  const requestImage = async (req, res) => {
    const promptAndShape = req.body;
    let size = shapeMap[promptAndShape.shape];
    const image = await openai.images.generate({
      prompt: promptAndShape.content,
      model: "dall-e-3",
      n: 1,
      size: size,
    });
    const response = {
      ...promptAndShape,
      revisedPrompt: image.data[0].revised_prompt,
      imageUrl: image.data[0].url,
    };
    conversation.push(response);
    res.json(response);
  };
  app.get("/api/openai/conversation", getConversation);
  app.post("/api/openai/conversation", postChat);
  app.post("/api/openai/conversation/images", requestImage);
}
