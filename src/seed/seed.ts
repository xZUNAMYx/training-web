interface Level {
    name: string;
    units: Unit[];
}

interface Unit {
    name: string;
    themes: Themes[];
}

interface Themes {
    name: string;
    description: string;
    vocabulary: string[];
    videos: Video[];
}

interface Video {
    title: string;
    url: string;
}

interface SeedStudent {
    description: string;
    images: string[];
    inStock: number;
    phone: number;
    level: string; // Cambiado a string para referenciar el nombre del nivel
    slug: string;
    tags: string[];
    name: string;
    type: ValidTypes;
    gender: 'men'|'women';
}

type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';

interface Exercise {
    name: string;
    description: string;
    questions: Question[];
}

interface Question {
    question_text: string;
    question_type: 'multiple_choice' | 'fill_in_the_blank';
    correct_answer: string;
    options: Option[];
    image_url?: string;
    feedback?: string;
}

interface Option {
    option_text: string;
    is_correct: boolean;
}

interface SeedData {
    students: SeedStudent[];
    levels: Level[];
    exercises: Exercise[];
}

export const initialData: SeedData = {
    students: [
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346914/training/sofia_gil_hernandez_bfbzsb.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'a1',
            slug: "mens_chill_crew_neck_sweatshirt",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Sofia Gil Hernandez",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346913/training/marie_sofia_banquet_castro_rkrk7x.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'a2',
            slug: "mens_chill_crew_neck_sweatshirt2",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Marie Sofia Banquet Castro",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346913/training/juan_esteban_lopez_paniagua_ezi8mh.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'b1',
            slug: "mens_chill_crew_neck_sweatshirt3",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Juan Esteban Lopez Paniagua",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346913/training/julian_esteban_pajaro_gulfo_n71ib5.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'b2',
            slug: "mens_chill_crew_neck_sweatshirt4",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Julian Esteban Pajaro Gulfo",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346913/training/jaider_enrique_alvarez_vqeusp.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'a1',
            slug: "mens_chill_crew_neck_sweatshirt5",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Jaider Enrique Alvarez",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346912/training/juan_camilo_jaramillo_valencia_zsqfox.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'a2',
            slug: "mens_chill_crew_neck_sweatshirt6",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Juan Camilo Jaramillo Valencia",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346912/training/juan_esteban_galvis_buena%C3%b1o_xo1zyl.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'b1',
            slug: "mens_chill_crew_neck_sweatshirt7",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Juan Esteban Galvis Buenaño",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346912/training/elina_david_usuga_ustnn6.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'b2',
            slug: "mens_chill_crew_neck_sweatshirt8",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Elina David Usuga",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346912/training/dienys_sofia_duarte_torres_ht9i10.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'a1',
            slug: "mens_chill_crew_neck_sweatshirt9",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Dienys Sofia Duarte Torres",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346912/training/eliana_tobon_salas_vlwzll.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'a2',
            slug: "mens_chill_crew_neck_sweatshirt10",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Eliana Tobon Salas",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346912/training/camilo_andres_lozano_galeano_rjswzc.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'a1',
            slug: "mens_chill_crew_neck_sweatshirt11",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Camilo Andres Lozano Galeano",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346912/training/eliana_manjarrez_vargas_ejapba.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'a1',
            slug: "mens_chill_crew_neck_sweatshirt12",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Eliana Manjarrez Vargas",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346911/training/andres_felipe_alvarez_cadavid_oxmueg.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'a1',
            slug: "mens_chill_crew_neck_sweatshirt13",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Andres Felipe Alvarez Cadavid",
            gender: 'men',
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346911/training/cristian_camilo_alvaran_roldan_kw1tuu.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'a1',
            slug: "mens_chill_crew_neck_sweatshirt14",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Cristian Camilo Alvaran Roldan",
            gender: 'men',
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://piratasdelrock.com/wp-content/uploads/2023/10/Charly-Garcia.jpg'
            ],
            inStock: 7,
            phone: 75,
            level: 'a1',
            slug: "mens_chill_crew_neck_sweatshirt16",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Carlos Alberto Garcia Moreno",
            gender: 'men',
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://media.airedesantafe.com.ar/p/85b2ee3561dfe1e1674f62d9f08d3a7a/adjuntos/268/imagenes/002/782/0002782073/imagepng.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'a1',
            slug: "mens_chill_crew_neck_sweatshirt17",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Gustavo Adrian Cerati",
            gender: 'men'
        },
    ],




    levels: [
        {
            name: 'a1',
            units: [
                {
                    name: "Unit 1",
                    themes: [
                        {
                            name: "Greetings", 
                            description: "Greetings are the words we use to start a conversation and connect with others. They can be formal or informal and help set the tone for communication. In this lesson, you'll learn how to introduce yourself and others using common greetings in different situations.", 
                            vocabulary:["HI","HELLO","HOW ARE YOU?","HOW HAVE YOU BEEN?","HOW ARE YOU DOING?","WHAT’S UP?","GOOD MORNING","GOOD AFTERNOON","GOOD EVENING","WHAT’S GOING ON?","WHAT’S COOKING?","HOW IS EVERYTHING?","HOW DO YOU DO?","WHAT’S NEW?","WHAT’S BEEN UP?"]
, 
                            videos: [
                                { title: "Basic Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                            ],
                        },
                        {
                            name: "Answers", 
                            description: "Introduce yourself and others", 
                            vocabulary: ["Answers"], 
                            videos: [
                                { title: "Formal vs Informal Greetings", url: "https://www.youtube.com/embed/9rEQy5tVLnU?si=RG-30XoVARHpQ2ho" },
                            ],
                        },
                        {
                            name: "Farewells", 
                            description: "Introduce yourself and others", 
                            vocabulary: ["Farewells"], 
                            videos: [
                                { title: "Formal vs Informal Greetings", url: "https://www.youtube.com/embed/iJaBa6Jqy8k?si=iKvgnQ3ZsbFKZSoy" },
                            ],
                        },
                    ],
                },
                {
                    name: "Unit 2",
                    themes: [{
                        name: "Family members and professions review", 
                        description: "Independent relative clauses with who, which, that, where, when, why, whose", vocabulary: ["Subthemes 1", "Subthemes 2"], 
                        videos: [
                            { title: "Basic Greetings", url: "https://www.youtube.com/watch?v=eKs7YHZ95yI" },
                            { title: "Formal vs Informal Greetings", url: "https://www.youtube.com/watch?v=_9ZS6q4996g" },
                      ],
                    }],
                },
                {
                    name: "Unit 3",
                    themes: [{name: "Temas de unidad 3", description: "Independent relative clauses with who, which, that, where, when, why, whose", vocabulary: ["Subthemes 1", "Subthemes 2"], videos: [
                        { title: "Basic Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                        { title: "Formal vs Informal Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                    ],}]
                },
                {
                    name: "Unit 4",
                    themes: [{name: "Temas de unidad 4", description: "Independent relative clauses with who, which, that, where, when, why, whose", vocabulary: ["Subthemes 1", "Subthemes 2"], videos: [
                        { title: "Basic Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                        { title: "Formal vs Informal Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                    ],}]
                },
                {
                    name: "Unit 5",
                    themes: [{name: "Temas de unidad 5", description: "Independent relative clauses with who, which, that, where, when, why, whose", vocabulary: ["Subthemes 1", "Subthemes 2"], videos: [
                        { title: "Basic Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                        { title: "Formal vs Informal Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                    ],}]
                },
            ]
        },
        {
            name: 'a2',
            units: [
                {
                    name: "Unit 1",
                    // themes: ["Present simple vs. Present progressive", "Review daily routines and action words", "Adverbs of frequency"]
                    themes: [{name: "Present simple vs. Present progressive", description: "Review daily routines and action words", vocabulary: ["Subthemes 1", "Subthemes 2"], videos: [
                        { title: "Basic Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                        { title: "Formal vs Informal Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                    ],}]
                },
                {
                    name: "Unit 2",
                    themes: [{name: "Past simple vs. Past progressive", description: "Review past actions and time expressions", vocabulary: ["Subthemes 1", "Subthemes 2"], videos: [
                        { title: "Basic Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                        { title: "Formal vs Informal Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                    ],}]
                }
            ]
        },
        {
            name: 'b1',
            units: [
                {
                    name: "Unit 1",
                    themes: [{name: "Theme 1", description: "Description 1", vocabulary: ["Subthemes 1", "Subthemes 2"], videos: [
                        { title: "Basic Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                        { title: "Formal vs Informal Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                    ],}]
                },
                {
                    name: "Unit 2",
                    themes: [{name: "Theme 2", description: "Description 2", vocabulary: ["Subthemes 1", "Subthemes 2"], videos: [
                        { title: "Basic Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                        { title: "Formal vs Informal Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                    ],}]
                }
            ]
        },
        {
            name: 'b2',
            units: [
                {
                    name: "Unit 1",
                    themes: [{name: "Theme 1", description: "Description 1", vocabulary: ["Subthemes 1", "Subthemes 2"], videos: [
                        { title: "Basic Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                        { title: "Formal vs Informal Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                    ],}]
                },
                {
                    name: "Unit 2",
                    themes: [{name: "Theme 2", description: "Description 2", vocabulary: ["Subthemes 1", "Subthemes 2"], videos: [
                        { title: "Basic Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                        { title: "Formal vs Informal Greetings", url: "https://www.youtube.com/embed/eKs7YHZ95yI?si=XY20_JeCAgzUNnXF" },
                    ],}]
                }
            ]
        }
    ],


    exercises: [
        {
          name: "Basic English Practice",
          description: "Practice common English phrases, spelling, introductions, greetings, and farewells.",
          questions: [
            {
              question_text: "How do you say 'Hola' in English?",
              question_type: "multiple_choice",
              correct_answer: "Hello",
              options: [
                { option_text: "Hello", is_correct: true },
                { option_text: "Goodbye", is_correct: false },
                { option_text: "Thank you", is_correct: false },
              ],
              image_url: "https://th.bing.com/th/id/OIP.xwIBAajwIpfOnjFK7IjZhAHaHa?rs=1&pid=ImgDetMain", // Ejemplo de URL de imagen
              feedback: "'Hola' means 'Hello' in English.",
            },
            {
              question_text: "What is the correct response to 'Good morning'?",
              question_type: "multiple_choice",
              correct_answer: "Good morning",
              options: [
                { option_text: "Good morning", is_correct: true },
                { option_text: "Good evening", is_correct: false },
                { option_text: "Good night", is_correct: false },
              ],
              feedback: "'Good morning' is a common greeting in the morning.",
            },
            {
              question_text: "Which greeting is commonly used informally?",
              question_type: "multiple_choice",
              correct_answer: "What's up?",
              options: [
                { option_text: "Good afternoon", is_correct: false },
                { option_text: "Nice to meet you", is_correct: false },
                { option_text: "What's up?", is_correct: true },
              ],
                feedback: "'What's up?' is a casual way to say hello.",
            },
            {
              question_text: "Complete the phrase: How ___ you?",
              question_type: "fill_in_the_blank",
              correct_answer: "are",
              options: [],
                feedback: "The correct phrase is 'How are you?'",
            },
            {
              question_text: "Which greeting is more formal?",
              question_type: "multiple_choice",
              correct_answer: "How do you do?",
              options: [
                { option_text: "Hey!", is_correct: false },
                { option_text: "How do you do?", is_correct: true },
                { option_text: "What's up?", is_correct: false },
              ],
                feedback: "'How do you do?' is a formal greeting.",
            },
            {
              question_text: "Complete the phrase: Nice to ____ you.",
              question_type: "fill_in_the_blank",
              correct_answer: "meet",
              options: [],
                feedback: "The correct phrase is 'Nice to meet you.'",
            },
            {
              question_text: "Which phrase is commonly used when seeing someone after a long time?",
              question_type: "multiple_choice",
              correct_answer: "How have you been?",
              options: [
                { option_text: "See you later!", is_correct: false },
                { option_text: "How have you been?", is_correct: true },
                { option_text: "Nice to meet you", is_correct: false },
              ],
              feedback: "Ayuda por error o corecciones"
            },
            {
              question_text: "What is the correct spelling of the number after seven?",
              question_type: "multiple_choice",
              correct_answer: "Eight",
              options: [
                { option_text: "Eigth", is_correct: false },
                { option_text: "Eight", is_correct: true },
                { option_text: "Eigt", is_correct: false },
              ],
                feedback: "The correct spelling is 'Eight'.",
            },
            {
              question_text: "How do you spell the day that comes after Monday?",
              question_type: "fill_in_the_blank",
              correct_answer: "Tuesday",
              options: [],
                feedback: "The correct spelling is 'Tuesday'.",
            },
            {
              question_text: "Which is the correct way to introduce yourself?",
              question_type: "multiple_choice",
              correct_answer: "My name is John",
              options: [
                { option_text: "I am called John", is_correct: false },
                { option_text: "My name is John", is_correct: true },
                { option_text: "They call me John", is_correct: false },
              ],
                feedback: "The correct way to introduce yourself is 'My name is John'.",
            },
            {
              question_text: "Complete the introduction: '______ to meet you.'",
              question_type: "fill_in_the_blank",
              correct_answer: "Pleased",
              options: [],
                feedback: "The correct phrase is 'Pleased to meet you.'",
            },
            {
              question_text: "Which of these is NOT a common farewell?",
              question_type: "multiple_choice",
              correct_answer: "Good morning",
              options: [
                { option_text: "Goodbye", is_correct: false },
                { option_text: "See you later", is_correct: false },
                { option_text: "Good morning", is_correct: true },
              ],
                feedback: "'Good morning' is a greeting, not a farewell.",
            },
            {
              question_text: "What's a common informal way to say goodbye?",
              question_type: "multiple_choice",
              correct_answer: "Take care",
              options: [
                { option_text: "Take care", is_correct: true },
                { option_text: "Farewell", is_correct: false },
                { option_text: "Adieu", is_correct: false },
              ],
                feedback: "'Take care' is a friendly way to say goodbye.",
            },
            {
              question_text: "Complete the farewell: 'Have a nice ____.'",
              question_type: "fill_in_the_blank",
              correct_answer: "day",
              options: [],
                feedback: "The correct phrase is 'Have a nice day.'",
            },
            {
              question_text: "What's the correct spelling of the opposite of 'hello'?",
              question_type: "fill_in_the_blank",
              correct_answer: "goodbye",
              options: [],
                feedback: "The correct spelling is 'goodbye'.",
            },
          ],
        },
    ],  
}