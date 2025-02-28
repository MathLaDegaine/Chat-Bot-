document.addEventListener("DOMContentLoaded", function() {
    Vue.component('accueil', {
        template: '<div><h2>Bienvenue</h2><p>Bienvenue sur la plateforme d\'exercices scolaires.</p></div>'
    });

    Vue.component('maths', {
        template: `
            <div>
                <h2>Suites Arithmétiques</h2>
                <p>Une suite arithmétique est une suite de nombres où chaque terme est obtenu en ajoutant une valeur fixe, appelée la <strong>raison</strong>, au terme précédent.</p>
                <p>Formule générale : <strong>Un = U1 + (n - 1) * r</strong></p>
                <ul>
                    <li>Un est le n-ième terme</li>
                    <li>U1 est le premier terme</li>
                    <li>r est la raison</li>
                    <li>n est le rang du terme</li>
                </ul>
                <h3>Exercice 1 : Calcul du n-ième terme</h3>
                <p>Si U1 = 3 et r = 2, quel est le 10e terme de la suite ?</p>
                <input type="number" v-model="userAnswer1" placeholder="Votre réponse">
                <button @click="checkAnswer1">Vérifier</button>
                <p v-if="feedback1" :class="{ correct: isCorrect1, incorrect: !isCorrect1 }">{{ feedback1 }}</p>
                <h3>Exercice 2 : Trouver la raison</h3>
                <p>Si une suite commence par 5 et que le 4e terme est 17, quelle est la raison ?</p>
                <input type="number" v-model="userAnswer2" placeholder="Votre réponse">
                <button @click="checkAnswer2">Vérifier</button>
                <p v-if="feedback2" :class="{ correct: isCorrect2, incorrect: !isCorrect2 }">{{ feedback2 }}</p>
            </div>
        `,
        data() {
            return {
                userAnswer1: "",
                userAnswer2: "",
                feedback1: "",
                feedback2: "",
                isCorrect1: false,
                isCorrect2: false
            };
        },
        methods: {
            checkAnswer1() {
                const correctAnswer = 3 + (10 - 1) * 2;
                this.isCorrect1 = parseInt(this.userAnswer1) === correctAnswer;
                this.feedback1 = this.isCorrect1 ? "Bravo ! C'est correct." : "Incorrect, essayez encore !";
            },
            checkAnswer2() {
                const correctReason = (17 - 5) / (4 - 1);
                this.isCorrect2 = parseInt(this.userAnswer2) === correctReason;
                this.feedback2 = this.isCorrect2 ? "Bien joué !" : "Ce n'est pas la bonne réponse.";
            }
        }
    });

    Vue.component('histoiregeo', {
        template: `
            <div id="histoiregeo">
                <h2>Histoire : La Seconde Guerre mondiale</h2>
                
                <p>La Seconde Guerre mondiale a eu lieu entre **1939 et 1945** et a opposé les Alliés aux forces de l'Axe.</p>
    
                <h3>1. Le Déclenchement de la Guerre</h3>
                <p>Le conflit commence en **septembre 1939**, lorsque l'Allemagne envahit la Pologne.</p>
                <img src="images/invasion-pologne.jpg" alt="Invasion de la Pologne en 1939">
                
                <h3>2. La Bataille de Stalingrad (1942-1943)</h3>
                <p>Un tournant de la guerre : l'armée allemande subit une lourde défaite face à l'Union soviétique.</p>
                <img src="images/stalingrad.jpg" alt="Bataille de Stalingrad">
    
                <h3>3. Le Débarquement en Normandie (1944)</h3>
                <p>Le **6 juin 1944**, les troupes alliées débarquent en France pour libérer l'Europe de l'occupation nazie.</p>
                <img src="images/debarquement.jpg" alt="Débarquement en Normandie">
    
                <h3>📜 Questions</h3>
                <p>1. En quelle année la Seconde Guerre mondiale a-t-elle commencé ?</p>
                <input type="number" v-model="userAnswer1" placeholder="Votre réponse">
                <button @click="checkAnswer1">Vérifier</button>
                <p v-if="feedback1" :class="{ correct: isCorrect1, incorrect: !isCorrect1 }">{{ feedback1 }}</p>
    
                <p>2. Quelle bataille a marqué le tournant de la guerre sur le front de l'Est ?</p>
                <input type="text" v-model="userAnswer2" placeholder="Votre réponse">
                <button @click="checkAnswer2">Vérifier</button>
                <p v-if="feedback2" :class="{ correct: isCorrect2, incorrect: !isCorrect2 }">{{ feedback2 }}</p>
            </div>
        `,
        data() {
            return {
                userAnswer1: '',
                userAnswer2: '',
                feedback1: '',
                feedback2: '',
                isCorrect1: false,
                isCorrect2: false
            };
        },
        methods: {
            checkAnswer1() {
                this.isCorrect1 = parseInt(this.userAnswer1) === 1939;
                this.feedback1 = this.isCorrect1 ? "Bravo ! C'est correct." : "Incorrect, essayez encore.";
            },
            checkAnswer2() {
                this.isCorrect2 = this.userAnswer2.toLowerCase() === "stalingrad";
                this.feedback2 = this.isCorrect2 ? "Bien joué !" : "Ce n'est pas la bonne réponse.";
            }
        }
    });
    
    Vue.component('francais', {
        template: `
            <div id="francais">
                <h2>Compréhension de Texte Littéraire</h2>
                <p>Analysez le passage suivant extrait d'une œuvre célèbre et répondez aux questions.</p>
    
                <h3>Extrait de "Le Petit Prince" - Antoine de Saint-Exupéry</h3>
                <blockquote>
                    "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux."
                </blockquote>
    
                <h3>Questions</h3>
                <p>1. Que signifie cette phrase selon vous ?</p>
                <textarea v-model="userAnswer1" placeholder="Votre réponse"></textarea>
    
                <p>2. Comment cette citation s'applique-t-elle dans la vie de tous les jours ?</p>
                <textarea v-model="userAnswer2" placeholder="Votre réponse"></textarea>
    
                <button @click="submitAnswers">Soumettre</button>
                <p v-if="feedback" class="feedback">{{ feedback }}</p>
            </div>
        `,
        data() {
            return {
                userAnswer1: '',
                userAnswer2: '',
                feedback: ''
            };
        },
        methods: {
            submitAnswers() {
                if (this.userAnswer1 && this.userAnswer2) {
                    this.feedback = "Merci pour votre réponse ! Pensez à approfondir votre réflexion.";
                } else {
                    this.feedback = "Veuillez répondre aux deux questions avant de soumettre.";
                }
            }
        }
    });    
    Vue.component('anglais', {
        template: '<div><h2>Anglais</h2><p>Exercices d\'anglais ici.</p></div>'
    });
    
    Vue.component('science', {
        template: '<div><h2>Science</h2><p>Exercices de sciences ici.</p></div>'
    });
    
    Vue.component('profil', {
        template: `
            <div id="profil">
                <div class="profile-header">
                    <h2>Profil de l'Élève</h2>
                    <img :src="student.picture" alt="Photo de profil" class="profile-pic">
                </div>
                
                <div class="profile-info">
                    <div class="info-card">
                        <h3>Informations Personnelles</h3>
                        <p><strong>Nom :</strong> {{ student.name }}</p>
                        <p><strong>Âge :</strong> {{ student.age }} ans</p>
                        <p><strong>Classe :</strong> {{ student.class }}</p>
                    </div>
    
                    <div class="info-card">
                        <h3>Matières Préférées</h3>
                        <ul>
                            <li v-for="subject in student.favoriteSubjects" :key="subject">{{ subject }}</li>
                        </ul>
                    </div>
    
                    <div class="info-card">
                        <h3>Résultats</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Matière</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(note, subject) in student.grades" :key="subject">
                                    <td>{{ subject }}</td>
                                    <td>{{ note }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
    
                <button @click="editProfile" class="btn-edit">Modifier le Profil</button>
            </div>
        `,
        data() {
            return {
                student: {
                    name: "Dylan Dupont",
                    age: 12,
                    class: "6eme E",
                    picture: "https://img.freepik.com/photos-gratuite/petit-garcon-souriant-portrait-visage-gros-plan_53876-153276.jpg",
                    favoriteSubjects: ["Mathématiques", "Français", "Histoire-Géo", "Informatique"],
                    grades: {
                        "Mathématiques": 15,
                        "Français": 14,
                        "Histoire-Géo": 16,
                        "Informatique": 18
                    }
                }
            };
        },
        methods: {
            editProfile() {
                alert("Fonction d'édition du profil à implémenter.");
            }
        }
    });
    
    new Vue({
        el: "#app",
        data: {
            pages: [
                { name: "Mathématiques", component: "maths" },
                { name: "Français", component: "francais" },
                { name: "Histoire-Géo", component: "histoiregeo" },
                { name: "Anglais", component: "anglais" },
                { name: "Science", component: "science" },
                { name: "Profil", component: "profil" }
            ],
            currentPage: "Accueil",
            hoverMenu: "",
            chatOpen: false,
            chatInput: "",
            chatMessages: []
        },
        computed: {
            currentComponent() {
                return this.currentPage === "Accueil" ? "accueil" : this.pages.find(page => page.name === this.currentPage).component;
            }
        },
        methods: {
            changePage(page) {
                this.currentPage = page.name;
            },
            changePageAccueil() {
                this.currentPage = "Accueil";
            },
            toggleChat() {
                this.chatOpen = !this.chatOpen;
            },
            sendMessage() {
                if (this.chatInput.trim() === "") return;

                this.chatMessages.push({ text: this.chatInput, type: "user" });
                this.chatInput = "";

                fetch('http://localhost:3000/ask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: this.chatMessages[this.chatMessages.length - 1].text })
                })
                .then(response => response.json())
                .then(data => {
                    this.chatMessages.push({ text: data.reply, type: "bot" });
                })
                .catch(error => {
                    console.error('Erreur:', error);
                    this.chatMessages.push({ text: "Désolé, une erreur est survenue.", type: "bot" });
                });
            }
        }
    });
});