import { AlbumModel, MusicModel } from "../models/musicModel";
import images from "../public/images";

export const musics: MusicModel[] = [
    {
        name: 'He Has Done It All',
        shortDescription: 'This song talks about the price that Jesus paid for us on the cross of calvary, and all His...',
        description: 'This song talks about the price that Jesus paid for us on the cross of calvary, and all His good deeds here on Earth. Jesus still has the same power to perfect all that concerns you through His EVER-POTENT BLOOD.',
        image: images.He_Has_Done_It_All_Cover,
        socialLinks: [
            {
                youtube: '',
                spotify: '',
            }
        ],
        year: '2023',
        genre: 'Christian & Gsopel',
        path: '/musics/he_has_done_it_all.mp3',
        music: 'he_has_done_it_all.mp3',
    },
    {
        name: 'Great God',
        shortDescription: "This song GREAT GOD describes the unfathomable of God's mightiness and how beautiful   and majesty His...",
        description: "This song GREAT GOD describes the unfathomable of God's mightiness and how beautiful   and majesty His greatness is in all the earth. This song is to also give every child of God an assurance that we serve a God that is mightier than our challenges and the fears that seems to be facing us right now. All you need to do, is to reflect on the song and see His wondrous works.",
        image: images.Great_God_Cover,
        socialLinks: [
            {
                youtube: '',
                spotify: '',
            }
        ],
        year: '2023',
        genre: 'Christian & Gsopel',
        path: '/musics/Great_God.m4a',
        music: 'Great_God.m4a',
    },
    // {
    //     name: 'Amen Album',
    //     shortDescription: "This song GREAT GOD describes the unfathomable of God's mightiness and how beautiful   and majesty His...",
    //     description: "This song GREAT GOD describes the unfathomable of God's mightiness and how beautiful   and majesty His greatness is in all the earth. This song is to also give every child of God an assurance that we serve a God that is mightier than our challenges and the fears that seems to be facing us right now. All you need to do, is to reflect on the song and see His wondrous works.",
    //     image: images.Great_God_Cover,
    //     socialLinks: [
    //         {
    //             youtube: '',
    //             spotify: '',
    //         }
    //     ],
    //     year: '2023',
    //     genre: 'Christian & Gsopel',
    //     path: '/musics/Great_God.m4a', 
    //     music: 'Great_God.m4a',
    // },
]

export const albums: AlbumModel[] = [
    {
        albumName: 'Amen Album',
        musics: [
            {
                name: 'Amen',
                socialLinks: [
                    {
                        spotify: '',
                        youtube: '',
                    }
                ],
                year: '2023',
                genre: 'Gospel',
                path: '/musics/amen.mp3',
                music: 'amen.mp3'
            },
            {
                name: 'Bless the Lord',
                socialLinks: [
                    {
                        spotify: '',
                        youtube: '',
                    }
                ],
                year: '2023',
                genre: 'Gospel',
                path: '/musics/bless_the_lord.mp3',
                music: 'bless_the_lord.mp3'
            },
            {
                name: 'Breath of Life',
                socialLinks: [
                    {
                        spotify: '',
                        youtube: '',
                    }
                ],
                year: '2023',
                genre: 'Gospel',
                path: '/musics/breath_of_life.mp3',
                music: 'breath_of_life.mp3'
            },
            {
                name: 'Give thanks',
                socialLinks: [
                    {
                        spotify: '',
                        youtube: '',
                    }
                ],
                year: '2023',
                genre: 'Gospel',
                path: '/musics/give_thanks.mp3',
                music: 'give_thanks.mp3'
            },
            {
                name: `He's done it all`,
                socialLinks: [
                    {
                        spotify: '',
                        youtube: '',
                    }
                ],
                year: '2023',
                genre: 'Gospel',
                path: '/musics/he_has_done_it_all.mp3',
                music: 'he_has_done_it_all.mp3'
            },
            {
                name: 'How Great Thou Art',
                socialLinks: [
                    {
                        spotify: '',
                        youtube: '',
                    }
                ],
                year: '2023',
                genre: 'Gospel',
                path: '/musics/how_great_thou_art.mp3',
                music: 'how_great_thou_art.mp3'
            },
            {
                name: 'I am Blessed',
                socialLinks: [
                    {
                        spotify: '',
                        youtube: '',
                    }
                ],
                year: '2023',
                genre: 'Gospel',
                path: '/musics/i_am_blessed.mp3',
                music: 'i_am_blessed.mp3'
            },
            {
                name: 'Imela',
                socialLinks: [
                    {
                        spotify: '',
                        youtube: '',
                    }
                ],
                year: '2023',
                genre: 'Gospel',
                path: '/musics/Imela.mp3',
                music: 'Imela.mp3'
            },
            {
                name: 'Uwese',
                socialLinks: [
                    {
                        spotify: '',
                        youtube: '',
                    }
                ],
                year: '2023',
                genre: 'Gospel',
                path: '/musics/Uwese.mp3',
                music: 'Uwese.mp3'
            },
        ]
    }
]