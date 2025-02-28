const express = require('express');
const { OpenAI } = require('openai');  // Importer la bibliothèque OpenAI
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialiser Express
const app = express();
const port = 3000;

// Utiliser le middleware CORS pour autoriser les requêtes depuis le frontend
app.use(cors());

// Utiliser body-parser pour analyser les corps des requêtes en JSON
app.use(bodyParser.json());

// Initialiser OpenAI avec votre clé API (NE PAS mettre de clé API dans le frontend)
const openai = new OpenAI({
    apiKey: "Entrer votre clé d'API OPEN AI"      });

// Route pour recevoir des messages de l'utilisateur et interroger l'API OpenAI
app.post('/ask', async (req, res) => {
  const userMessage = req.body.message;  // Récupérer le message de l'utilisateur envoyé depuis le frontend

  console.log(`Message reçu : ${userMessage}`);  // Log pour vérifier le message reçu

  try {
    // Utiliser l'API OpenAI pour générer une réponse
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',  // Utilisez un modèle valide, par exemple 'gpt-4'
      messages: [
        { role: 'user', content: userMessage }
      ],
      temperature: 0.7, // Contrôle de la créativité de la réponse (0.0 à 1.0)
      max_tokens: 150, // Limiter le nombre de tokens dans la réponse
    });

    console.log('Réponse de l\'API OpenAI :', completion);  // Log pour voir la réponse complète

    // Vérifier si la réponse existe et envoyer la réponse générée
    if (completion.choices && completion.choices.length > 0) {
      const botReply = completion.choices[0].message.content;
      res.json({ reply: botReply });
    } else {
      throw new Error('Aucune réponse générée par OpenAI');
    }
  } catch (error) {
    console.error('Erreur lors de l\'appel à OpenAI:', error.message || error);
    res.status(500).send('Erreur lors de la récupération de la réponse de OpenAI');
  }
});

// Lancer le serveur Express
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
