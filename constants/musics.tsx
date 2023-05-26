import { MusicModel } from "../models/musicModel";
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
    //     name: 'Great God',
    //     shortDescription: 'This song talks about the price that Jesus paid for us on the cross of calvary, and all His...',
    //     description: 'This song talks about the price that Jesus paid for us on the cross of calvary, and all His good deeds here on Earth. Jesus still has the same power to perfect all that concerns you through His EVER-POTENT BLOOD.',
    //     image: images.He_Has_Done_It_All_Cover,
    //     socialLinks: [
    //         {
    //             youtube: '',
    //             spotify: '',
    //         }
    //     ]
    // },
]