interface SeedStudent {
    description: string;
    images: string[];
    inStock: number;
    phone: number;
    level: Level;
    slug: string;
    tags: string[];
    name: string;
    type: ValidTypes;
    gender: 'men'|'women'
}

type Level = 'A1'|'A2'|'B1'|'B2';
type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';

interface SeedData {
    students: SeedStudent[],
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
            level: 'A1',
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
            level: 'A2',
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
            level: 'B1',
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
            level: 'B2',
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
            level: 'A1',
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
            level: 'A2',
            slug: "mens_chill_crew_neck_sweatshirt6",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Juan Camilo Jaramillo Valencia",
            gender: 'men'
        },
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                'https://res.cloudinary.com/dbvkyec1s/image/upload/v1738346912/training/juan_esteban_galvis_buena%C3%B1o_xo1zyl.png'
            ],
            inStock: 7,
            phone: 75,
            level: 'B1',
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
            level: 'B2',
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
            level: 'A1',
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
            level: 'A2',
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
            level: 'A1',
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
            level: 'A1',
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
            level: 'A1',
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
            level: 'A1',
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
            level: 'A1',
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
            level: 'A1',
            slug: "mens_chill_crew_neck_sweatshirt17",
            type: 'shirts',
            tags: ['sweatshirt'],
            name: "Gustavo Adrian Cerati",
            gender: 'men'
        },
        // {
        //     description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
        //     images: [
        //         '1740507-00-A_0_2000.jpg',
        //         '1740507-00-A_1.jpg',
        //     ],
        //     inStock: 5,
        //     phone: 200,
        //     level: [ 'A1','B1','KIDS 1','KIDS 2'],
        //     slug: "men_quilted_shirt_jacket",
        //     type: 'shirts',
        //     tags: ['jacket'],
        //     name: "Men's Quilted Shirt Jacket",
        //     gender: 'men'
        // },
        
        // {
        //     description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
        //     images: [
        //         '1740250-00-A_0_2000.jpg',
        //         '1740250-00-A_1.jpg'
        //     ],
        //     inStock: 10,
        //     phone: 130,
        //     level: ['A1','B1','B2','KIDS 1','KIDS 2'],
        //     slug: "men_raven_lightweight_zip_up_bomber_jacket",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Raven Lightweight Zip Up Bomber Jacket",
        //     gender: 'men'
        // },

        // {
        //     description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
        //     images: [
        //         '1740280-00-A_0_2000.jpg',
        //         '1740280-00-A_1.jpg',
        //     ],
        //     inStock: 50,
        //     phone: 45,
        //     level: [ 'A1','B1','B2'],
        //     slug: "men_turbine_long_sleeve_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Turbine Long Sleeve Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
        //     images: [
        //         '1741416-00-A_0_2000.jpg',
        //         '1741416-00-A_1.jpg',
        //     ],
        //     inStock: 50,
        //     phone: 40,
        //     level: ['B1','B2','KIDS 1','KIDS 2'],
        //     slug: "men_turbine_short_sleeve_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Turbine Short Sleeve Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
        //     images: [
        //         '7654393-00-A_2_2000.jpg',
        //         '7654393-00-A_3.jpg',
        //     ],
        //     inStock: 0,
        //     phone: 35,
        //     level: ['B1','B2','KIDS 1','KIDS 2'],
        //     slug: "men_cybertruck_owl_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Cybertruck Owl Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
        //     images: [
        //         '1703767-00-A_0_2000.jpg',
        //         '1703767-00-A_1.jpg',
        //     ],
        //     inStock: 15,
        //     phone: 35,
        //     level: ['A1','B1','B2','KIDS 1'],
        //     slug: "men_solar_roof_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Solar Roof Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
        //     images: [
        //         '1700280-00-A_0_2000.jpg',
        //         '1700280-00-A_1.jpg',
        //     ],
        //     inStock: 17,
        //     phone: 35,
        //     level: [ 'A1','KIDS 1','KIDS 2'],
        //     slug: "men_let_the_sun_shine_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Let the Sun Shine Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
        //     images: [
        //         '8764734-00-A_0_2000.jpg',
        //         '8764734-00-A_1.jpg',
        //     ],
        //     inStock: 12,
        //     phone: 35,
        //     level: [ 'A1','B1'],
        //     slug: "men_3d_large_wordmark_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's 3D Large Wordmark Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
        //     images: [
        //         '7652426-00-A_0_2000.jpg',
        //         '7652426-00-A_1.jpg',
        //     ],
        //     inStock: 5,
        //     phone: 35,
        //     level: [ 'A1'],
        //     slug: "men_3d_t_logo_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's 3D T Logo Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
        //     images: [
        //         '8528839-00-A_0_2000.jpg',
        //         '8528839-00-A_2.jpg',
        //     ],
        //     inStock: 2,
        //     phone: 35,
        //     level: [ 'A1','B1'],
        //     slug: "men_3d_small_wordmark_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men’s 3D Small Wordmark Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
        //     images: [
        //         '1549268-00-A_0_2000.jpg',
        //         '1549268-00-A_2.jpg',
        //     ],
        //     inStock: 82,
        //     phone: 35,
        //     level: 'A1',
        //     slug: "men_plaid_mode_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Plaid Mode Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
        //     images: [
        //         '9877034-00-A_0_2000.jpg',
        //         '9877034-00-A_2.jpg',
        //     ],
        //     inStock: 24,
        //     phone: 35,
        //     level: ['KIDS 1','KIDS 2'],
        //     slug: "men_powerwall_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Powerwall Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
        //     images: [
        //         '1633802-00-A_0_2000.jpg',
        //         '1633802-00-A_2.jpg',
        //     ],
        //     inStock: 5,
        //     phone: 30,
        //     level: [ 'A1','KIDS 2'],
        //     slug: "men_battery_day_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Battery Day Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
        //     images: [
        //         '7654399-00-A_0_2000.jpg',
        //         '7654399-00-A_1.jpg',
        //     ],
        //     inStock: 150,
        //     phone: 30,
        //     level: ['B1','B2'],
        //     slug: "men_cybertruck_bulletproof_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men’s Cybertruck Bulletproof Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
        //     images: [
        //         '7652410-00-A_0.jpg',
        //         '7652410-00-A_1_2000.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 35,
        //     level: 'A1',
        //     slug: "men_haha_yes_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Haha Yes Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
        //     images: [
        //         '8764600-00-A_0_2000.jpg',
        //         '8764600-00-A_2.jpg',
        //     ],
        //     inStock: 34,
        //     phone: 35,
        //     level: [ 'A1','B1','B2'],
        //     slug: "men_s3xy_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's S3XY Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
        //     images: [
        //         '8764813-00-A_0_2000.jpg',
        //         '8764813-00-A_1.jpg',
        //     ],
        //     inStock: 15,
        //     phone: 40,
        //     level: ['KIDS 1','KIDS 2'],
        //     slug: "men_3d_wordmark_long_sleeve_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's 3D Wordmark Long Sleeve Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
        //     images: [
        //         '8529198-00-A_0_2000.jpg',
        //         '8529198-00-A_1.jpg',
        //     ],
        //     inStock: 12,
        //     phone: 40,
        //     level: ['A1','KIDS 2'],
        //     slug: "men_3d_t_logo_long_sleeve_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's 3D T Logo Long Sleeve Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
        //     images: [
        //         '1740245-00-A_0_2000.jpg',
        //         '1740245-00-A_1.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 115,
        //     level: 'A1',
        //     slug: "men_raven_lightweight_hoodie",
        //     type: 'hoodies',
        //     tags: ['hoodie'],
        //     name: "Men's Raven Lightweight Hoodie",
        //     gender: 'men'
        // },
        // {
        //     description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
        //     images: [
        //         '1740051-00-A_0_2000.jpg',
        //         '1740051-00-A_1.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 130,
        //     level: 'A1',
        //     slug: "chill_pullover_hoodie",
        //     type: 'hoodies',
        //     tags: ['hoodie'],
        //     name: "Chill Pullover Hoodie",
        //     gender: 'men'
        // },
        // {
        //     description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
        //     images: [
        //         '1741111-00-A_0_2000.jpg',
        //         '1741111-00-A_1.jpg',
        //     ],
        //     inStock: 100,
        //     phone: 85,
        //     level: ['A1','B2','KIDS 1','KIDS 2'],
        //     slug: "men_chill_full_zip_hoodie",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Chill Full Zip Hoodie",
        //     gender: 'men'
        // },
        // {
        //     description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
        //     images: [
        //         '1740140-00-A_0_2000.jpg',
        //         '1740140-00-A_1.jpg',
        //     ],
        //     inStock: 7,
        //     phone: 85,
        //     level: [ 'A1','B1'],
        //     slug: "men_chill_quarter_zip_pullover_-_gray",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Chill Quarter Zip Pullover - Gray",
        //     gender: 'men'
        // },
        // {
        //     description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
        //     images: [
        //         '1740145-00-A_2_2000.jpg',
        //         '1740145-00-A_1.jpg',
        //     ],
        //     inStock: 15,
        //     phone: 85,
        //     level: [ 'A1','B1','B2'],
        //     slug: "men_chill_quarter_zip_pullover_-_white",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Men's Chill Quarter Zip Pullover - White",
        //     gender: 'men'
        // },
        // {
        //     description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
        //     images: [
        //         '8529107-00-A_0_2000.jpg',
        //         '8529107-00-A_1.jpg',
        //     ],
        //     inStock: 15,
        //     phone: 70,
        //     level: [ 'A1','KIDS 1','KIDS 2'],
        //     slug: "3d_large_wordmark_pullover_hoodie",
        //     type: 'hoodies',
        //     tags: ['hoodie'],
        //     name: "3D Large Wordmark Pullover Hoodie",
        //     gender: 'men'
        // },
        // {
        //     description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
        //     images: [
        //         '7654420-00-A_0_2000.jpg',
        //         '7654420-00-A_1_2000.jpg',
        //     ],
        //     inStock: 13,
        //     phone: 60,
        //     level: 'A1',
        //     slug: "cybertruck_graffiti_hoodie",
        //     type: 'hoodies',
        //     tags: ['hoodie'],
        //     name: "Cybertruck Graffiti Hoodie",
        //     gender: 'men'
        // },
        // {
        //     description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
        //     images: [
        //         '1657932-00-A_0_2000.jpg',
        //         '1657932-00-A_1.jpg',
        //     ],
        //     inStock: 11,
        //     phone: 30,
        //     level: 'A1',
        //     slug: "relaxed_t_logo_hat",
        //     type: 'hats',
        //     tags: ['hats'],
        //     name: "Relaxed T Logo Hat",
        //     gender: 'men'
        // },
        // {
        //     description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
        //     images: [
        //         '1740417-00-A_0_2000.jpg',
        //         '1740417-00-A_1.jpg',
        //     ],
        //     inStock: 13,
        //     phone: 35,
        //     level: 'A1',
        //     slug: "thermal_cuffed_beanie",
        //     type: 'hats',
        //     tags: ['hats'],
        //     name: "Thermal Cuffed Beanie",
        //     gender: 'men'
        // },
        // {
        //     description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
        //     images: [
        //         '1740535-00-A_0_2000.jpg',
        //         '1740535-00-A_1.jpg',
        //     ],
        //     inStock: 85,
        //     phone: 225,
        //     level: [ 'A1','B1'],
        //     slug: "women_cropped_puffer_jacket",
        //     type: 'hoodies',
        //     tags: ['hoodie'],
        //     name: "Women's Cropped Puffer Jacket",
        //     gender: 'women'
        // },
        // {
        //     description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
        //     images: [
        //         '1740226-00-A_0_2000.jpg',
        //         '1740226-00-A_1.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 130,
        //     level: [ 'A1','B1','KIDS 2'],
        //     slug: "women_chill_half_zip_cropped_hoodie",
        //     type: 'hoodies',
        //     tags: ['hoodie'],
        //     name: "Women's Chill Half Zip Cropped Hoodie",
        //     gender: 'women'
        // },
        // {
        //     description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
        //     images: [
        //         '1740260-00-A_0_2000.jpg',
        //         '1740260-00-A_1.jpg',
        //     ],
        //     inStock: 9,
        //     phone: 110,
        //     level: 'A1',
        //     slug: "women_raven_slouchy_crew_sweatshirt",
        //     type: 'hoodies',
        //     tags: ['hoodie'],
        //     name: "Women's Raven Slouchy Crew Sweatshirt",
        //     gender: 'women'
        // },
        // {
        //     description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
        //     images: [
        //         '1740290-00-A_0_2000.jpg',
        //         '1740290-00-A_1.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 45,
        //     level: 'A1',
        //     slug: "women_turbine_cropped_long_sleeve_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Women's Turbine Cropped Long Sleeve Tee",
        //     gender: 'women'
        // },
        // {
        //     description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
        //     images: [
        //         '1741441-00-A_0_2000.jpg',
        //         '1741441-00-A_1.jpg',
        //     ],
        //     inStock: 0,
        //     phone: 40,
        //     level: [ 'A1'],
        //     slug: "women_turbine_cropped_short_sleeve_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Women's Turbine Cropped Short Sleeve Tee",
        //     gender: 'women'
        // },
        // {
        //     description: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
        //     images: [
        //         '8765090-00-A_0_2000.jpg',
        //         '8765090-00-A_1.jpg',
        //     ],
        //     inStock: 30,
        //     phone: 35,
        //     level: 'A1',
        //     slug: "women_t_logo_short_sleeve_scoop_neck_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Women's T Logo Short Sleeve Scoop Neck Tee",
        //     gender: 'women'
        // },
        // {
        //     description: "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
        //     images: [
        //         '8765100-00-A_0_2000.jpg',
        //         '8765100-00-A_1.jpg',
        //     ],
        //     inStock: 16,
        //     phone: 40,
        //     level: [ 'A1','B2','KIDS 1','KIDS 2'],
        //     slug: "women_t_logo_long_sleeve_scoop_neck_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Women's T Logo Long Sleeve Scoop Neck Tee",
        //     gender: 'women'
        // },
        // {
        //     description: "Designed for style and comfort, the Women's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
        //     images: [
        //         '8765120-00-A_0_2000.jpg',
        //         '8765120-00-A_1.jpg',
        //     ],
        //     inStock: 18,
        //     phone: 35,
        //     level: 'A1',
        //     slug: "women_small_wordmark_short_sleeve_v-neck_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Women's Small Wordmark Short Sleeve V-Neck Tee",
        //     gender: 'women'
        // },
        // {
        //     description: "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
        //     images: [
        //         '8765115-00-A_0_2000.jpg',
        //         '8765115-00-A_1.jpg',
        //     ],
        //     inStock: 5,
        //     phone: 35,
        //     level: ['KIDS 1','KIDS 2'],
        //     slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
        //     gender: 'women'
        // },
        // {
        //     description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
        //     images: [
        //         '1549275-00-A_0_2000.jpg',
        //         '1549275-00-A_1.jpg',
        //     ],
        //     inStock: 16,
        //     phone: 35,
        //     level: ['A1','B1'],
        //     slug: "women_plaid_mode_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Women's Plaid Mode Tee",
        //     gender: 'women'
        // },
        // {
        //     description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
        //     images: [
        //         '9877040-00-A_0_2000.jpg',
        //         '9877040-00-A_1.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 130,
        //     level: 'A1',
        //     slug: "women_powerwall_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Women’s Powerwall Tee",
        //     gender: 'women'
        // },
        // {
        //     description: "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
        //     images: [
        //         '5645680-00-A_0_2000.jpg',
        //         '5645680-00-A_3.jpg',
        //     ],
        //     inStock: 3,
        //     phone: 90,
        //     level: ['B1','B2','KIDS 1','KIDS 2'],
        //     slug: "women_corp_jacket",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Women's Corp Jacket",
        //     gender: 'women'
        // },
        // {
        //     description: "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
        //     images: [
        //         '1740270-00-A_0_2000.jpg',
        //         '1740270-00-A_1.jpg',
        //     ],
        //     inStock: 162,
        //     phone: 100,
        //     level: 'A1',
        //     slug: "women_raven_joggers",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Women's Raven Joggers",
        //     gender: 'women'
        // },
        // {
        //     description: "Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
        //     images: [
        //         '1742694-00-A_1_2000.jpg',
        //         '1742694-00-A_3.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 30,
        //     level: [ 'A1','B1'],
        //     slug: "kids_cybertruck_long_sleeve_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Kids Cybertruck Long Sleeve Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
        //     images: [
        //         '8529312-00-A_0_2000.jpg',
        //         '8529312-00-A_1.jpg',
        //     ],
        //     inStock: 0,
        //     phone: 25,
        //     level: [ 'A1','B1'],
        //     slug: "kids_scribble_t_logo_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Kids Scribble T Logo Tee",
        //     gender: 'women'
        // },
        // {
        //     description: "The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
        //     images: [
        //         '8529342-00-A_0_2000.jpg',
        //         '8529342-00-A_1.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 25,
        //     level: [ 'A1','B1'],
        //     slug: "kids_cybertruck_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Kids Cybertruck Tee",
        //     gender: 'women'
        // },
        // {
        //     description: "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
        //     images: [
        //         '8529354-00-A_0_2000.jpg',
        //         '8529354-00-A_1.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 30,
        //     level: [ 'A1','B1'],
        //     slug: "kids_racing_stripe_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Kids Racing Stripe Tee",
        //     gender: 'men'
        // },
        // {
        //     description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
        //     images: [
        //         '7652465-00-A_0_2000.jpg',
        //         '7652465-00-A_1.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 30,
        //     level: [ 'A1','B1'],
        //     slug: "kids_3d_t_logo_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Kids 3D T Logo Tee",
        //     gender: 'women'
        // },
        // {
        //     description: "The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.",
        //     images: [
        //         '100042307_0_2000.jpg',
        //         '100042307_alt_2000.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 30,
        //     level: [ 'A1','B1'],
        //     slug: "kids_checkered_tee",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Kids Checkered Tee",
        //     gender: 'women'
        // },
        // {
        //     description: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
        //     images: [
        //         '1473809-00-A_1_2000.jpg',
        //         '1473809-00-A_alt.jpg',
        //     ],
        //     inStock: 16,
        //     phone: 25,
        //     level: [ 'A1'],
        //     slug: "made_on_earth_by_humans_onesie",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Made on Earth by Humans Onesie",
        //     gender: 'women'
        // },
        // {
        //     description: "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
        //     images: [
        //         '8529387-00-A_0_2000.jpg',
        //         '8529387-00-A_1.jpg',
        //     ],
        //     inStock: 0,
        //     phone: 30,
        //     level: [ 'A1'],
        //     slug: "scribble_t_logo_onesie",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Scribble T Logo Onesie",
        //     gender: 'women'
        // },
        // {
        //     description: "Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
        //     images: [
        //         '1473834-00-A_2_2000.jpg',
        //         '1473829-00-A_2_2000.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 30,
        //     level: [ 'A1'],
        //     slug: "zero_emissions_(almost)_onesie",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Zero Emissions (Almost) Onesie",
        //     gender: 'women'
        // },
        // {
        //     description: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
        //     images: [
        //         '1742702-00-A_0_2000.jpg',
        //         '1742702-00-A_1.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 65,
        //     level: [ 'A1','B1'],
        //     slug: "kids_cyberquad_bomber_jacket",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Kids Cyberquad Bomber Jacket",
        //     gender: 'women'
        // },
        // {
        //     description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
        //     images: [
        //         '1506211-00-A_0_2000.jpg',
        //         '1506211-00-A_1_2000.jpg',
        //     ],
        //     inStock: 10,
        //     phone: 30,
        //     level: [ 'A1','B1'],
        //     slug: "kids_corp_jacket",
        //     type: 'shirts',
        //     tags: ['shirt'],
        //     name: "Kids Corp Jacket",
        //     gender: 'men'
        // },
    ]
}