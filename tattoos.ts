export interface TattooItem {
    name: string;
    collection: string;
    overlay_male: string;
    overlay_female: string;
    zone: string;
    price: number;
    id?: number;
}

export const tattoosShared = {
    getTattoos: (
        /**
         * 1 - Male, 0 - FeMale
         */
        male: number = 1
    ): TattooItem[] => {
        return (!male ? tattoosShared.data.filter(item => item[3]) : tattoosShared.data.filter(item => item[2])).map(item => {
            return {
                name: item[0] as string,
                collection: item[1] as string,
                overlay_male: item[2] as string,
                overlay_female: item[3] as string,
                zone: item[4] as string,
                price: item[5] as number
            }
        })
    },
    getAllTattoos: (): TattooItem[] => {
        return tattoosShared.data.map(item => {
            return {
                name: item[0] as string,
                collection: item[1] as string,
                overlay_male: item[2] as string,
                overlay_female: item[3] as string,
                zone: item[4] as string,
                price: item[5] as number
            }
        })
    },
    getTattoo: (
        /**
         * 1 - Male, 0 - FeMale
         */
        id: number
    ): TattooItem => {
        let item = tattoosShared.data.find(q => q[6] === id);
        if(!item) return;
        return {
            name: item[0] as string,
            collection: item[1] as string,
            overlay_male: item[2] as string,
            overlay_female: item[3] as string,
            zone: item[4] as string,
            price: item[5] as number,
            id: item[6] as number,
        }
    },
    getZoneName: (zone:string) => {
        return tattoosShared.getZoneData(zone).name
    },
    getZoneData: (zone:string) => {
        const itm = tattoosShared.categorys.find(q => q[1] === zone);
        if(!itm) return null;
        return {
            name: itm[0],
            zone: itm[1],
            bone: itm[2],
            x: itm[3],
            y: itm[4],
            z: itm[5]
        }
    },
    convertArrayToObject: (item: (string | number)[]): TattooItem => {
        return {
            name: item[0] as string,
            collection: item[1] as string,
            overlay_male: item[2] as string,
            overlay_female: item[3] as string,
            zone: item[4] as string,
            price: item[5] as number
        }
    },
    findTattoo: (collection:string, overlay: string) => {
        let cfg = tattoosShared.data.find(q => (q[1] === collection && (q[2] === overlay || q[3] === overlay)));
        if(!cfg) return null;
        return tattoosShared.convertArrayToObject(cfg);
    },
    categorys: <[string, string, number, number, number, number][]> [
        ["Голова", "ZONE_HEAD", 31086, 0.5, 2.5, 1],
        ["Торс", "ZONE_TORSO", 24818, 0, 3.5, 0.3],
        ["Левая рука", "ZONE_LEFT_ARM", 61163, -1.0, 3.0, 0],
        ["Правая рука", "ZONE_RIGHT_ARM", 28252, 1.0, 3.0, 0],
        ["Левая нога", "ZONE_LEFT_LEG", 63931, -1.0, 3.0, 0],
        ["Правая нога", "ZONE_RIGHT_LEG", 36864, 1.0, 3.0, 0],
    ],
    data: <[string, string, string, string ,string ,number, number][]>[

        /* №1 - Пасифик */

        /* №1 Торс [0 - 52] */
        ["Скала", "mpbeach_overlays", "", "MP_Bea_F_Back_000", "ZONE_TORSO", 10240, 567],
        ["Цветок гибискуса 2", "mpbeach_overlays", "", "MP_Bea_F_Stom_001", "ZONE_TORSO", 10500, 1],
        ["Креветка", "mpbeach_overlays", "", "MP_Bea_F_Back_002", "ZONE_TORSO", 12700, 2],
        ["Якорь", "mpbeach_overlays", "", "MP_Bea_F_Chest_001", "ZONE_TORSO", 11800, 3],
        ["Венок Лос-Сантос", "mpbeach_overlays", "", "MP_Bea_F_Chest_002", "ZONE_TORSO", 12900, 4],
        ["Любовный кинжал", "mpbeach_overlays", "", "MP_Bea_F_RSide_000", "ZONE_TORSO", 12400, 5],
        ["Морские коньки", "mpbeach_overlays", "", "MP_Bea_F_Should_000", "ZONE_TORSO", 12400, 6],
        ["Зубатка", "mpbeach_overlays", "", "MP_Bea_F_Should_001", "ZONE_TORSO", 12700, 7],
        ["Ласточка", "mpbeach_overlays", "", "MP_Bea_F_Stom_000", "ZONE_TORSO", 12600, 8],
        ["Дельфин", "mpbeach_overlays", "", "MP_Bea_F_Stom_002", "ZONE_TORSO", 12900, 9],
        ["Корабли", "mpbeach_overlays", "MP_Bea_M_Back_000", "", "ZONE_TORSO", 12300, 10],
        ["Трайбл - рыба-молот", "mpbeach_overlays", "MP_Bea_M_Chest_000", "", "ZONE_TORSO", 13500, 11],
        ["Трайбл - акула", "mpbeach_overlays", "MP_Bea_M_Chest_001", "", "ZONE_TORSO", 13300, 12],
        ["Рыба-меч", "mpbeach_overlays", "MP_Bea_M_Stom_000", "", "ZONE_TORSO", 13600, 13],
        ["Колесо", "mpbeach_overlays", "MP_Bea_M_Stom_001", "", "ZONE_TORSO", 18000, 14],
        ["Ушлый", "mpbusiness_overlays", "MP_Buis_M_Stomach_000", "", "ZONE_TORSO", 16200, 15],
        ["Богач", "mpbusiness_overlays", "MP_Buis_M_Chest_000", "", "ZONE_TORSO", 13300, 16],
        ["$$$", "mpbusiness_overlays", "MP_Buis_M_Chest_001", "", "ZONE_TORSO", 14600, 17],
        ["Стригу бабло", "mpbusiness_overlays", "MP_Buis_M_Back_000", "", "ZONE_TORSO", 12700, 18],
        ["Крупный игрок", "mpbusiness_overlays", "", "MP_Buis_F_Chest_000", "ZONE_TORSO", 13700, 19],
        ["Делаю деньги", "mpbusiness_overlays", "", "MP_Buis_F_Chest_001", "ZONE_TORSO", 12600, 20],
        ["Люблю деньги", "mpbusiness_overlays", "", "MP_Buis_F_Chest_002", "ZONE_TORSO", 12500, 21],
        ["Бриллиант", "mpbusiness_overlays", "", "MP_Buis_F_Stom_000", "ZONE_TORSO", 12100, 22],
        ["Логотип Santo Capra", "mpbusiness_overlays", "", "MP_Buis_F_Stom_001", "ZONE_TORSO", 16900, 23],
        ["Толстосум", "mpbusiness_overlays", "", "MP_Buis_F_Stom_002", "ZONE_TORSO", 13900, 24],
        ["Уважуха", "mpbusiness_overlays", "", "MP_Buis_F_Back_000", "ZONE_TORSO", 15900, 25],
        ["Охотник за деньгами", "mpbusiness_overlays", "", "MP_Buis_F_Back_001", "ZONE_TORSO", 11700, 26],
        ["Эмблема банды", "mpbusiness_overlays", "MP_Male_Crew_Tat_001", "MP_Female_Crew_Tat_001", "ZONE_TORSO", 15700, 27],
        ["Скрещенные стрелы", "mphipster_overlays", "FM_Hip_M_Tat_000", "FM_Hip_F_Tat_000", "ZONE_TORSO", 13600, 28],
        ["Химия", "mphipster_overlays", "FM_Hip_M_Tat_002", "FM_Hip_F_Tat_002", "ZONE_TORSO", 11800, 29],
        ["Птицы", "mphipster_overlays", "FM_Hip_M_Tat_006", "FM_Hip_F_Tat_006", "ZONE_TORSO", 14800, 30],
        ["Бесконечность", "mphipster_overlays", "FM_Hip_M_Tat_011", "FM_Hip_F_Tat_011", "ZONE_TORSO", 10400, 31],
        ["Оленьи рога", "mphipster_overlays", "FM_Hip_M_Tat_012", "FM_Hip_F_Tat_012", "ZONE_TORSO", 12400, 32],
        ["Бумбокс", "mphipster_overlays", "FM_Hip_M_Tat_013", "FM_Hip_F_Tat_013", "ZONE_TORSO", 15600, 33],
        ["Пирамида", "mphipster_overlays", "FM_Hip_M_Tat_024", "FM_Hip_F_Tat_024", "ZONE_TORSO", 14900, 34],
        ["Watch Your Step", "mphipster_overlays", "FM_Hip_M_Tat_025", "FM_Hip_F_Tat_025", "ZONE_TORSO", 16500, 35],
        ["Печаль", "mphipster_overlays", "FM_Hip_M_Tat_029", "FM_Hip_F_Tat_029", "ZONE_TORSO", 12100, 36],
        ["Плавник акулы", "mphipster_overlays", "FM_Hip_M_Tat_030", "FM_Hip_F_Tat_030", "ZONE_TORSO", 14900, 37],
        ["Скейтборд", "mphipster_overlays", "FM_Hip_M_Tat_031", "FM_Hip_F_Tat_031", "ZONE_TORSO", 14200, 38],
        ["Бумажный самолет", "mphipster_overlays", "FM_Hip_M_Tat_032", "FM_Hip_F_Tat_032", "ZONE_TORSO", 12000, 39],
        ["Олень", "mphipster_overlays", "FM_Hip_M_Tat_033", "FM_Hip_F_Tat_033", "ZONE_TORSO", 12400, 40],
        ["Зашитое сердце", "mphipster_overlays", "FM_Hip_M_Tat_035", "FM_Hip_F_Tat_035", "ZONE_TORSO",12900, 41],
        ["Зуб", "mphipster_overlays", "FM_Hip_M_Tat_041", "FM_Hip_F_Tat_041", "ZONE_TORSO", 12000, 42],
        ["Треугольники", "mphipster_overlays", "FM_Hip_M_Tat_046", "FM_Hip_F_Tat_046", "ZONE_TORSO", 13200, 43],
        ["Кассета", "mphipster_overlays", "FM_Hip_M_Tat_047", "FM_Hip_F_Tat_047", "ZONE_TORSO", 14700, 44],
        ["Eagle Eyes", "mpairraces_overlays", "MP_Airraces_Tattoo_007_M", "MP_Airraces_Tattoo_007_F", "ZONE_TORSO", 14700, 45],
        ["Байкер-демон", "mpbiker_overlays", "MP_MP_Biker_Tat_000_M", "MP_MP_Biker_Tat_000_F", "ZONE_TORSO", 13800, 46],
        ["Два ствола", "mpbiker_overlays", "MP_MP_Biker_Tat_001_M", "MP_MP_Biker_Tat_001_F", "ZONE_TORSO", 16500, 47],
        ["Байкер в паутине", "mpbiker_overlays", "MP_MP_Biker_Tat_003_M", "MP_MP_Biker_Tat_003_F", "ZONE_TORSO", 14100, 48],
        ["Сделано в Америке", "mpbiker_overlays", "MP_MP_Biker_Tat_005_M", "MP_MP_Biker_Tat_005_F", "ZONE_TORSO", 15500, 49],
        ["Мотоцикл и свобода", "mpbiker_overlays", "MP_MP_Biker_Tat_006_M", "MP_MP_Biker_Tat_006_F", "ZONE_TORSO", 16700, 50],
        ["Колеса свободы", "mpbiker_overlays", "MP_MP_Biker_Tat_008_M", "MP_MP_Biker_Tat_008_F", "ZONE_TORSO", 14300, 51],
        ["Череп быка", "mpbiker_overlays", "MP_MP_Biker_Tat_010_M", "MP_MP_Biker_Tat_010_F", "ZONE_TORSO", 13900, 52],

        /* №2 Торс [53 - 105] */
        ["Покойтесь с миром, братья", "mpbiker_overlays", "MP_MP_Biker_Tat_011_M", "MP_MP_Biker_Tat_011_F", 10800, 53],
        ["Череп демона", "mpbiker_overlays", "MP_MP_Biker_Tat_013_M", "MP_MP_Biker_Tat_013_F", "ZONE_TORSO", 18900, 54],
        ["Монстр с когтями", "mpbiker_overlays", "MP_MP_Biker_Tat_017_M", "MP_MP_Biker_Tat_017_F", "ZONE_TORSO", 13300, 55],
        ["Мотоцикл скелета", "mpbiker_overlays", "MP_MP_Biker_Tat_018_M", "MP_MP_Biker_Tat_018_F", "ZONE_TORSO", 14900, 56],
        ["Жуткие когти", "mpbiker_overlays", "MP_MP_Biker_Tat_019_M", "MP_MP_Biker_Tat_019_F", "ZONE_TORSO", 19300, 57],
        ["Огненная смерть", "mpbiker_overlays", "MP_MP_Biker_Tat_021_M", "MP_MP_Biker_Tat_021_F", "ZONE_TORSO", 19800, 58],
        ["Клуб Western", "mpbiker_overlays", "MP_MP_Biker_Tat_023_M", "MP_MP_Biker_Tat_023_F", "ZONE_TORSO", 15800, 59],
        ["Американская мечта", "mpbiker_overlays", "MP_MP_Biker_Tat_026_M", "MP_MP_Biker_Tat_026_F", "ZONE_TORSO", 13400, 60],
        ["Костолом", "mpbiker_overlays", "MP_MP_Biker_Tat_029_M", "MP_MP_Biker_Tat_029_F", "ZONE_TORSO", 14700, 61],
        ["Brothers For Life", "mpbiker_overlays", "MP_MP_Biker_Tat_030_M", "MP_MP_Biker_Tat_030_F", "ZONE_TORSO", 14600, 62],
        ["Механик", "mpbiker_overlays", "MP_MP_Biker_Tat_031_M", "MP_MP_Biker_Tat_031_F", "ZONE_TORSO", 14500, 63],
        ["Орел Western", "mpbiker_overlays", "MP_MP_Biker_Tat_032_M", "MP_MP_Biker_Tat_032_F", "ZONE_TORSO", 13700, 64],
        ["Байкерское братство", "mpbiker_overlays", "MP_MP_Biker_Tat_034_M", "MP_MP_Biker_Tat_034_F", "ZONE_TORSO", 13700, 65],
        ["Пожиратель бензина", "mpbiker_overlays", "MP_MP_Biker_Tat_039_M", "MP_MP_Biker_Tat_039_F", "ZONE_TORSO", 15700, 66],
        ["No Regrets", "mpbiker_overlays", "MP_MP_Biker_Tat_041_M", "MP_MP_Biker_Tat_041_F", "ZONE_TORSO", 12800, 67],
        ["Ride Forever", "mpbiker_overlays", "MP_MP_Biker_Tat_043_M", "MP_MP_Biker_Tat_043_F", "ZONE_TORSO", 15600, 68],
        ["Unforgiven", "mpbiker_overlays", "MP_MP_Biker_Tat_050_M", "MP_MP_Biker_Tat_050_F", "ZONE_TORSO", 13000, 69],
        ["Верный конь", "mpbiker_overlays", "MP_MP_Biker_Tat_052_M", "MP_MP_Biker_Tat_052_F", "ZONE_TORSO", 16200, 70],
        ["Стервятник-жнец", "mpbiker_overlays", "MP_MP_Biker_Tat_058_M", "MP_MP_Biker_Tat_058_F", "ZONE_TORSO", 16600, 71],
        ["Faggio", "mpbiker_overlays", "MP_MP_Biker_Tat_059_M", "MP_MP_Biker_Tat_059_F", "ZONE_TORSO", 13200, 72],
        ["Мы - стиляги!", "mpbiker_overlays", "MP_MP_Biker_Tat_060_M", "MP_MP_Biker_Tat_060_F", "ZONE_TORSO", 14700, 73],
        ["Карп (контур)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_005", "MP_Xmas2_F_Tat_005", "ZONE_TORSO", 17200, 74],
        ["Карп (тень)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_006", "MP_Xmas2_F_Tat_006", "ZONE_TORSO", 22400, 75],
        ["Смерть пришла", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_009", "MP_Xmas2_F_Tat_009", "ZONE_TORSO", 14900, 76],
        ["Рычащий тигр", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_011", "MP_Xmas2_F_Tat_011", "ZONE_TORSO", 15800, 77],
        ["Ящерица", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_013", "MP_Xmas2_F_Tat_013", "ZONE_TORSO", 14700, 78],
        ["Японский воин", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_015", "MP_Xmas2_F_Tat_015", "ZONE_TORSO", 13500, 79],
        ["Раскрытые губы (контур)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_016", "MP_Xmas2_F_Tat_016", "ZONE_TORSO", 12400, 80],
        ["Раскрытые губы (цвет)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_017", "MP_Xmas2_F_Tat_017", "ZONE_TORSO", 14500, 81],
        ["Королевский кинжал (контур)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_018", "MP_Xmas2_F_Tat_018", "ZONE_TORSO", 14500, 82],
        ["Королевский кинжал (цвет)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_019", "MP_Xmas2_F_Tat_019", "ZONE_TORSO", 16900, 83],
        ["Палач", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_028", "MP_Xmas2_F_Tat_028", "ZONE_TORSO", 16900, 84],
        ["Тор и гоблин", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_000_M", "MP_Christmas2017_Tattoo_000_F", "ZONE_TORSO", 10000, 85],
        ["Кабуто", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_002_M", "MP_Christmas2017_Tattoo_002_F", "ZONE_TORSO", 12800, 86],
        ["Воин-туземец", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_003_M", "MP_Christmas2017_Tattoo_003_F", "ZONE_TORSO", 11200, 87],
        ["Призрачный дракон", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_005_M", "MP_Christmas2017_Tattoo_005_F", "ZONE_TORSO", 17100, 88],
        ["Спартанец-воин", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_008_M", "MP_Christmas2017_Tattoo_008_F", "ZONE_TORSO", 19700, 89],
        ["Скандинавская руна", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_009_M", "MP_Christmas2017_Tattoo_009_F", "ZONE_TORSO", 14600, 90],
        ["Щит спартанца", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_010_M", "MP_Christmas2017_Tattoo_010_F", "ZONE_TORSO", 18300, 91],
        ["Выветрившийся череп", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_011_M", "MP_Christmas2017_Tattoo_011_F", "ZONE_TORSO", 19800, 92],
        ["Самурай", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_015_M", "MP_Christmas2017_Tattoo_015_F", "ZONE_TORSO", 18300, 93],
        ["Один и ворон", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_016_M", "MP_Christmas2017_Tattoo_016_F", "ZONE_TORSO", 13500, 94],
        ["Ударный отряд", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_019_M", "MP_Christmas2017_Tattoo_019_F", "ZONE_TORSO", 14700, 95],
        ["Взгляд Медузы", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_020_M", "MP_Christmas2017_Tattoo_020_F", "ZONE_TORSO", 15200, 96],
        ["Спартанец и лев", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_021_M", "MP_Christmas2017_Tattoo_021_F", "ZONE_TORSO", 15900, 97],
        ["Спартанец и конь", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_022_M", "MP_Christmas2017_Tattoo_022_F", "ZONE_TORSO", 17700, 98],
        ["Истребитель драконов", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_024_M", "MP_Christmas2017_Tattoo_024_F", "ZONE_TORSO", 16700, 99],
        ["Череп спартанца", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_026_M", "MP_Christmas2017_Tattoo_026_F", "ZONE_TORSO", 12400, 100],
        ["Приди и возьми", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_027_M", "MP_Christmas2017_Tattoo_027_F", "ZONE_TORSO", 15800, 101],
        ["???", "mpchristmas2018_overlays", "MP_Christmas2018_Tat_000_M", "MP_Christmas2018_Tat_000_F", "ZONE_TORSO", 14500, 102],
        ["Пуленепробиваемый", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_000_M", "MP_Gunrunning_Tattoo_000_F", "ZONE_TORSO", 13200, 103],
        ["Перекрещенные стволы", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_001_M", "MP_Gunrunning_Tattoo_001_F", "ZONE_TORSO", 14320, 104],
        ["Нож-бабочка", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_009_M", "MP_Gunrunning_Tattoo_009_F", "ZONE_TORSO", 15900, 105],

        /* №3 Торс [106 - 158] */
        ["Наличные", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_010_M", "MP_Gunrunning_Tattoo_010_F", "ZONE_TORSO", 13800, 106],
        ["Кинжалы с долларами", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_012_M", "MP_Gunrunning_Tattoo_012_F", "ZONE_TORSO", 15300, 107],
        ["Эмблема волка", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_013_M", "MP_Gunrunning_Tattoo_013_F", "ZONE_TORSO", 15900, 108],
        ["Удар в спину", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_014_M", "MP_Gunrunning_Tattoo_014_F", "ZONE_TORSO", 14500, 109],
        ["Опознавательные жетоны", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_017_M", "MP_Gunrunning_Tattoo_017_F", "ZONE_TORSO", 16100, 110],
        ["Череп и пистолеты", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_018_M", "MP_Gunrunning_Tattoo_018_F", "ZONE_TORSO", 16900, 111],
        ["Пистолеты и крылья", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_019_M", "MP_Gunrunning_Tattoo_019_F", "ZONE_TORSO", 19300, 112],
        ["Корона и винтовки", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_020_M", "MP_Gunrunning_Tattoo_020_F", "ZONE_TORSO", 13400, 113],
        ["Граната-сердце", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_022_M", "MP_Gunrunning_Tattoo_022_F", "ZONE_TORSO", 15400, 114],
        ["Цепочка с микро-ПП", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_028_M", "MP_Gunrunning_Tattoo_028_F", "ZONE_TORSO", 14300, 115],
        ["Выиграть и проиграть", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_029_M", "MP_Gunrunning_Tattoo_029_F", "ZONE_TORSO", 13900, 116],
        ["Снежный человек", "mpheist3_overlays", "mpHeist3_Tat_023_M", "mpHeist3_Tat_023_F", "ZONE_TORSO", 14700, 117],
        ["Гора Чилиад", "mpheist3_overlays", "mpHeist3_Tat_024_M", "mpHeist3_Tat_024_F", "ZONE_TORSO", 14100, 118],
        ["Davis", "mpheist3_overlays", "mpHeist3_Tat_025_M", "mpHeist3_Tat_025_F", "ZONE_TORSO", 14600, 119],
        ["Dignity", "mpheist3_overlays", "mpHeist3_Tat_026_M", "mpHeist3_Tat_026_F", "ZONE_TORSO", 16900, 120],
        ["Epsilon", "mpheist3_overlays", "mpHeist3_Tat_027_M", "mpHeist3_Tat_027_F", "ZONE_TORSO", 13800, 121],
        ["Испорченные бананы", "mpheist3_overlays", "mpHeist3_Tat_028_M", "mpHeist3_Tat_028_F", "ZONE_TORSO", 14100, 122],
        ["Fatal Incursion", "mpheist3_overlays", "mpHeist3_Tat_029_M", "mpHeist3_Tat_029_F", "ZONE_TORSO", 13500, 123],
        ["Ховитцер", "mpheist3_overlays", "mpHeist3_Tat_030_M", "mpHeist3_Tat_030_F", "ZONE_TORSO", 14000, 124],
        ["LS City", "mpheist3_overlays", "mpHeist3_Tat_033_M", "mpHeist3_Tat_033_F", "ZONE_TORSO", 15100, 125],
        ["LS Panic", "mpheist3_overlays", "mpHeist3_Tat_035_M", "mpHeist3_Tat_035_F", "ZONE_TORSO", 13700, 126],
        ["Щит LS", "mpheist3_overlays", "mpHeist3_Tat_036_M", "mpHeist3_Tat_036_F", "ZONE_TORSO", 13300, 127],
        ["Божья коровка", "mpheist3_overlays", "mpHeist3_Tat_037_M", "mpHeist3_Tat_037_F", "ZONE_TORSO", 15100, 128],
        ["Robot Bubblegum", "mpheist3_overlays", "mpHeist3_Tat_038_M", "mpHeist3_Tat_038_F", "ZONE_TORSO", 18200, 129],
        ["Космические рейнджеры", "mpheist3_overlays", "mpHeist3_Tat_039_M", "mpHeist3_Tat_039_F", "ZONE_TORSO", 13004, 130],
        ["Шестеренки", "mpimportexport_overlays", "MP_MP_ImportExport_Tat_000_M", "MP_MP_ImportExport_Tat_000_F", "ZONE_TORSO", 14500, 131],
        ["Электростанция", "mpimportexport_overlays", "MP_MP_ImportExport_Tat_001_M", "MP_MP_ImportExport_Tat_001_F", "ZONE_TORSO", 13800, 132],
        ["На волне смерти", "mpimportexport_overlays", "MP_MP_ImportExport_Tat_002_M", "MP_MP_ImportExport_Tat_002_F", "ZONE_TORSO", 16000, 133],
        ["Адские змеи", "mpimportexport_overlays", "MP_MP_ImportExport_Tat_009_M", "MP_MP_ImportExport_Tat_009_F", "ZONE_TORSO", 15400, 134],
        ["Садись за руль", "mpimportexport_overlays", "MP_MP_ImportExport_Tat_010_M", "MP_MP_ImportExport_Tat_010_F", "ZONE_TORSO", 14900, 135],
        ["Не вякай", "mpimportexport_overlays", "MP_MP_ImportExport_Tat_011_M", "MP_MP_ImportExport_Tat_011_F", "ZONE_TORSO", 13700, 136],
        ["Король воинов", "mplowrider_overlays", "MP_LR_Tat_001_M", "MP_LR_Tat_001_F", "ZONE_TORSO", 14800, 137],
        ["Дева Мария", "mplowrider_overlays", "MP_LR_Tat_002_M", "MP_LR_Tat_002_F", "ZONE_TORSO", 14600, 138],
        ["Пушка", "mplowrider_overlays", "MP_LR_Tat_004_M", "MP_LR_Tat_004_F", "ZONE_TORSO", 15900, 139],
        ["Амазонка", "mplowrider_overlays", "MP_LR_Tat_009_M", "MP_LR_Tat_009_F", "ZONE_TORSO", 16000, 140],
        ["Злой ангел", "mplowrider_overlays", "MP_LR_Tat_010_M", "MP_LR_Tat_010_F", "ZONE_TORSO", 15600, 141],
        ["Люблю азарт", "mplowrider_overlays", "MP_LR_Tat_013_M", "MP_LR_Tat_013_F", "ZONE_TORSO", 14800, 142],
        ["Любовь слепа", "mplowrider_overlays", "MP_LR_Tat_014_M", "MP_LR_Tat_014_F", "ZONE_TORSO", 14200, 143],
        ["Грустный ангел", "mplowrider_overlays", "MP_LR_Tat_021_M", "MP_LR_Tat_021_F", "ZONE_TORSO", 14100, 144],
        ["Королевский захват", "mplowrider_overlays", "MP_LR_Tat_026_M", "MP_LR_Tat_026_F", "ZONE_TORSO", 15100, 145],
        ["Атака SA", "mplowrider2_overlays", "MP_LR_Tat_000_M", "MP_LR_Tat_000_F", "ZONE_TORSO", 11300, 146],
        ["Любовь к игре", "mplowrider2_overlays", "MP_LR_Tat_008_M", "MP_LR_Tat_008_F", "ZONE_TORSO", 14000, 147],
        ["Леди свобода", "mplowrider2_overlays", "MP_LR_Tat_011_M", "MP_LR_Tat_011_F", "ZONE_TORSO", 17100, 148],
        ["Королевский поцелуй", "mplowrider2_overlays", "MP_LR_Tat_012_M", "MP_LR_Tat_012_F", "ZONE_TORSO", 19100, 149],
        ["С двумя лицами", "mplowrider2_overlays", "MP_LR_Tat_016_M", "MP_LR_Tat_016_F", "ZONE_TORSO", 17900, 150],
        ["Смерть за спиной", "mplowrider2_overlays", "MP_LR_Tat_019_M", "MP_LR_Tat_019_F", "ZONE_TORSO", 16200, 151],
        ["Красотка смерть", "mplowrider2_overlays", "MP_LR_Tat_031_M", "MP_LR_Tat_031_F", "ZONE_TORSO", 22200, 152],
        ["Конец правления", "mplowrider2_overlays", "MP_LR_Tat_032_M", "MP_LR_Tat_032_F", "ZONE_TORSO", 18400, 153],
        ["Feather Mural", "mpluxe_overlays", "MP_LUXE_TAT_024_M", "MP_LUXE_TAT_024_F", "ZONE_TORSO", 16100, 154],
        ["Классическая Enema", "mpluxe_overlays", "MP_LUXE_ENEMA_000_M", "", "ZONE_TORSO", 17900, 155],
        ["Geometric Design", "mpluxe2_overlays", "MP_LUXE_TAT_031_M", "MP_LUXE_TAT_031_F", "ZONE_TORSO", 45800, 156],
        ["Благословенны мертвецы", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_000_M", "MP_Smuggler_Tattoo_000_F", "ZONE_TORSO", 16200, 157],
        ["Мертвецы не лгут", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_002_M", "MP_Smuggler_Tattoo_002_F", "ZONE_TORSO", 18500, 158],

        /* №4 Торс [159 - 211] + */
        ["Не отдавай ничего", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_003_M", "MP_Smuggler_Tattoo_003_F", "ZONE_TORSO", 12500, 159],
        ["Никогда не сдавайся", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_006_M", "MP_Smuggler_Tattoo_006_F", "ZONE_TORSO", 12500, 160],
        ["Бесчестный", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_007_M", "MP_Smuggler_Tattoo_007_F", "ZONE_TORSO", 16500, 161],
        ["Парусный конфликт", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_009_M", "MP_Smuggler_Tattoo_009_F", "ZONE_TORSO", 16900, 162],
        ["До встречи в аду", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_010_M", "MP_Smuggler_Tattoo_010_F", "ZONE_TORSO", 19000, 163],
        ["Оторванные крылья", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_013_M", "MP_Smuggler_Tattoo_013_F", "ZONE_TORSO", 12900, 164],
        ["Веселый Роджер", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_015_M", "MP_Smuggler_Tattoo_015_F", "ZONE_TORSO", 13200, 165],
        ["Череп-компас", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_016_M", "MP_Smuggler_Tattoo_016_F", "ZONE_TORSO", 14600, 166],
        ["Парусник в рамке", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_017_M", "MP_Smuggler_Tattoo_017_F", "ZONE_TORSO", 15500, 167],
        ["Кто нашел, тот и владелец", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_018_M", "MP_Smuggler_Tattoo_018_F", 15000, 168],
        ["Потерявшийся в море", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_019_M", "MP_Smuggler_Tattoo_019_F", "ZONE_TORSO", 13000, 169],
        ["Сказки мертвеца", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_021_M", "MP_Smuggler_Tattoo_021_F", "ZONE_TORSO", 14000, 170],
        ["Клад помечен крестом", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_022_M", "MP_Smuggler_Tattoo_022_F", "ZONE_TORSO", 16000, 171],
        ["Капитан пиратов", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_024_M", "MP_Smuggler_Tattoo_024_F", "ZONE_TORSO", 28000, 172],
        ["В щупальцах чудовища", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_025_M", "MP_Smuggler_Tattoo_025_F", "ZONE_TORSO", 32200, 173],
        ["Два туза в кармане", "mpvinewood_overlays", "MP_Vinewood_Tat_000_M", "MP_Vinewood_Tat_000_F", "ZONE_TORSO", 14600, 174],
        ["Джекпот", "mpvinewood_overlays", "MP_Vinewood_Tat_001_M", "MP_Vinewood_Tat_001_F", "ZONE_TORSO", 15700, 175],
        ["Роял-флеш", "mpvinewood_overlays", "MP_Vinewood_Tat_003_M", "MP_Vinewood_Tat_003_F", "ZONE_TORSO", 17900, 176],
        ["Колесо мастей", "mpvinewood_overlays", "MP_Vinewood_Tat_006_M", "MP_Vinewood_Tat_006_F", "ZONE_TORSO", 14500, 177],
        ["777", "mpvinewood_overlays", "MP_Vinewood_Tat_007_M", "MP_Vinewood_Tat_007_F", "ZONE_TORSO", 13800, 178],
        ["Глаза змеи", "mpvinewood_overlays", "MP_Vinewood_Tat_008_M", "MP_Vinewood_Tat_008_F", "ZONE_TORSO", 15000, 179],
        ["Любовь до гроба", "mpvinewood_overlays", "MP_Vinewood_Tat_009_M", "MP_Vinewood_Tat_009_F", "ZONE_TORSO", 18000, 180],
        ["Фотофиниш", "mpvinewood_overlays", "MP_Vinewood_Tat_010_M", "MP_Vinewood_Tat_010_F", "ZONE_TORSO", 15700, 181],
        ["Вся жизнь - игра", "mpvinewood_overlays", "MP_Vinewood_Tat_011_M", "MP_Vinewood_Tat_011_F", "ZONE_TORSO", 13700, 182],
        ["Разномастный череп", "mpvinewood_overlays", "MP_Vinewood_Tat_012_M", "MP_Vinewood_Tat_012_F", "ZONE_TORSO", 12400, 183],
        ["Веселый Джокер", "mpvinewood_overlays", "MP_Vinewood_Tat_015_M", "MP_Vinewood_Tat_015_F", "ZONE_TORSO", 25800, 184],
        ["Роза и тузы", "mpvinewood_overlays", "MP_Vinewood_Tat_016_M", "MP_Vinewood_Tat_016_F", "ZONE_TORSO", 14500, 185],
        ["Бросай кости", "mpvinewood_overlays", "MP_Vinewood_Tat_017_M", "MP_Vinewood_Tat_017_F", "ZONE_TORSO", 16400, 186],
        ["Покажи свои карты", "mpvinewood_overlays", "MP_Vinewood_Tat_021_M", "MP_Vinewood_Tat_021_F", "ZONE_TORSO", 12500, 187],
        ["Кровавые деньги", "mpvinewood_overlays", "MP_Vinewood_Tat_022_M", "MP_Vinewood_Tat_022_F", "ZONE_TORSO", 13900, 188],
        ["Счастливые семерки", "mpvinewood_overlays", "MP_Vinewood_Tat_023_M", "MP_Vinewood_Tat_023_F", "ZONE_TORSO", 18900, 189],
        ["Вкус денег", "mpvinewood_overlays", "MP_Vinewood_Tat_024_M", "MP_Vinewood_Tat_024_F", "ZONE_TORSO", 13200, 190],
        ["Игровой стол", "mpvinewood_overlays", "MP_Vinewood_Tat_029_M", "MP_Vinewood_Tat_029_F", "ZONE_TORSO", 27000, 191],
        ["Королевская масть", "mpvinewood_overlays", "MP_Vinewood_Tat_030_M", "MP_Vinewood_Tat_030_F", "ZONE_TORSO", 17300, 192],
        ["Король азарта", "mpvinewood_overlays", "MP_Vinewood_Tat_031_M", "MP_Vinewood_Tat_031_F", "ZONE_TORSO", 14500, 193],
        ["Ходи с туза", "mpvinewood_overlays", "MP_Vinewood_Tat_032_M", "MP_Vinewood_Tat_032_F", "ZONE_TORSO", 27500, 194],
        ["I Heart LC", "mpxmas_604490_overlays", "MP_IHeartLC_000_M", "MP_IHeartLC_001_F", "ZONE_TORSO", 16000, 195],
        ["Turbulence", "mpairraces_overlays", "MP_Airraces_Tattoo_000_M", "MP_Airraces_Tattoo_000_F", "ZONE_TORSO", 13500, 196],
        ["Pilot Skull", "mpairraces_overlays", "MP_Airraces_Tattoo_001_M", "MP_Airraces_Tattoo_001_F", "ZONE_TORSO", 10300, 197],
        ["Winged Bombshell", "mpairraces_overlays", "MP_Airraces_Tattoo_002_M", "MP_Airraces_Tattoo_002_F", "ZONE_TORSO", 12000, 198],
        ["Balloon Pioneer", "mpairraces_overlays", "MP_Airraces_Tattoo_004_M", "MP_Airraces_Tattoo_004_F", "ZONE_TORSO", 17500, 199],
        ["Parachute Belle", "mpairraces_overlays", "MP_Airraces_Tattoo_005_M", "MP_Airraces_Tattoo_005_F", "ZONE_TORSO", 15200, 200],
        ["Bombs Away", "mpairraces_overlays", "MP_Airraces_Tattoo_006_M", "MP_Airraces_Tattoo_006_F", "ZONE_TORSO", 16600, 201],
        ["Hibiscus Flower Duo", "mpbeach_overlays", "", "MP_Bea_F_Back_001", "ZONE_TORSO", 16600, 202],
        ["Anchor", "mpbeach_overlays", "", "MP_Bea_F_Chest_000", "ZONE_TORSO", 13800, 203],
        ["Abstract Skull", "mpluxe_overlays", "MP_LUXE_TAT_003_M", "MP_LUXE_TAT_003_F", "ZONE_TORSO", 15500, 204],
        ["Adorned Wolf", "mpluxe_overlays", "MP_LUXE_TAT_006_M", "MP_LUXE_TAT_006_F", "ZONE_TORSO", 16800, 205],
        ["Eye of the Griffin", "mpluxe_overlays", "MP_LUXE_TAT_007_M", "MP_LUXE_TAT_007_F", "ZONE_TORSO", 25500, 206],
        ["Flying Eye", "mpluxe_overlays", "MP_LUXE_TAT_008_M", "MP_LUXE_TAT_008_F", "ZONE_TORSO", 13600, 207],
        ["Ancient Queen", "mpluxe_overlays", "MP_LUXE_TAT_014_M", "MP_LUXE_TAT_014_F", "ZONE_TORSO", 12200, 208],
        ["Smoking Sisters", "mpluxe_overlays", "MP_LUXE_TAT_015_M", "MP_LUXE_TAT_015_F", "ZONE_TORSO", 12600, 209],
        ["The Howler", "mpluxe2_overlays", "MP_LUXE_TAT_002_M", "MP_LUXE_TAT_002_F", "ZONE_TORSO", 13500, 210],
        ["Geometric Galaxy", "mpluxe2_overlays", "MP_LUXE_TAT_012_M", "MP_LUXE_TAT_012_F", "ZONE_TORSO", 17300, 211],

        /* №5 Торс [212 - 263] + */
        ["Cloaked Angel", "mpluxe2_overlays", "MP_LUXE_TAT_022_M", "MP_LUXE_TAT_022_F", "ZONE_TORSO", 15200, 212],
        ["Reaper Sway", "mpluxe2_overlays", "MP_LUXE_TAT_025_M", "MP_LUXE_TAT_025_F", "ZONE_TORSO", 13700, 213],
        ["Cobra Dawn", "mpluxe2_overlays", "MP_LUXE_TAT_027_M", "MP_LUXE_TAT_027_F", "ZONE_TORSO", 15000, 214],
        ["Geometric Design", "mpluxe2_overlays", "MP_LUXE_TAT_029_M", "MP_LUXE_TAT_029_F", "ZONE_TORSO", 20000, 215],
        ["Wheels of Death", "mpstunt_overlays", "MP_MP_Stunt_tat_011_M", "MP_MP_Stunt_tat_011_F", "ZONE_TORSO", 17500, 216],
        ["Punk Biker", "mpstunt_overlays", "MP_MP_Stunt_tat_012_M", "MP_MP_Stunt_tat_012_F", "ZONE_TORSO", 13400, 217],
        ["Bat Cat of Spades", "mpstunt_overlays", "MP_MP_Stunt_tat_014_M", "MP_MP_Stunt_tat_014_F", "ZONE_TORSO", 12500, 218],
        ["Vintage Bully", "mpstunt_overlays", "MP_MP_Stunt_tat_018_M", "MP_MP_Stunt_tat_018_F", "ZONE_TORSO", 18700, 219],
        ["Engine Heart", "mpstunt_overlays", "MP_MP_Stunt_tat_019_M", "MP_MP_Stunt_tat_019_F", "ZONE_TORSO", 12000, 220],
        ["Road Kill", "mpstunt_overlays", "MP_MP_Stunt_tat_024_M", "MP_MP_Stunt_tat_024_F", "ZONE_TORSO", 17000, 221],
        ["Winged Wheel", "mpstunt_overlays", "MP_MP_Stunt_tat_026_M", "MP_MP_Stunt_tat_026_F", "ZONE_TORSO", 15600, 222],
        ["Punk Road Hog", "mpstunt_overlays", "MP_MP_Stunt_tat_027_M", "MP_MP_Stunt_tat_027_F", "ZONE_TORSO", 15307, 223],
        ["Majestic Finish", "mpstunt_overlays", "MP_MP_Stunt_tat_029_M", "MP_MP_Stunt_tat_029_F", "ZONE_TORSO", 11000, 224],
        ["Man's Ruin", "mpstunt_overlays", "MP_MP_Stunt_tat_030_M", "MP_MP_Stunt_tat_030_F", "ZONE_TORSO", 10000, 225],
        ["Sugar Skull Trucker", "mpstunt_overlays", "MP_MP_Stunt_tat_033_M", "MP_MP_Stunt_tat_033_F", "ZONE_TORSO", 16600, 226],
        ["Feather Road Kill", "mpstunt_overlays", "MP_MP_Stunt_tat_034_M", "MP_MP_Stunt_tat_034_F", "ZONE_TORSO", 18100, 227],
        ["Big Grills", "mpstunt_overlays", "MP_MP_Stunt_tat_037_M", "MP_MP_Stunt_tat_037_F", "ZONE_TORSO", 13400, 228],
        ["Monkey Chopper", "mpstunt_overlays", "MP_MP_Stunt_tat_040_M", "MP_MP_Stunt_tat_040_F", "ZONE_TORSO", 13100, 229],
        ["Brapp", "mpstunt_overlays", "MP_MP_Stunt_tat_041_M", "MP_MP_Stunt_tat_041_F", "ZONE_TORSO", 15600, 230],
        ["Ram Skull", "mpstunt_overlays", "MP_MP_Stunt_tat_044_M", "MP_MP_Stunt_tat_044_F", "ZONE_TORSO", 19400, 231],
        ["Full Throttle", "mpstunt_overlays", "MP_MP_Stunt_tat_046_M", "MP_MP_Stunt_tat_046_F", "ZONE_TORSO",14500, 232],
        ["Racing Doll", "mpstunt_overlays", "MP_MP_Stunt_tat_048_M", "MP_MP_Stunt_tat_048_F", "ZONE_TORSO", 14200, 233],
        ["Blackjack", "multiplayer_overlays", "FM_Tat_Award_M_003", "FM_Tat_Award_F_003", "ZONE_TORSO", 13500, 234],
        ["Hustler", "multiplayer_overlays", "FM_Tat_Award_M_004", "FM_Tat_Award_F_004", "ZONE_TORSO", 15500, 235],
        ["Angel", "multiplayer_overlays", "FM_Tat_Award_M_005", "FM_Tat_Award_F_005", "ZONE_TORSO", 14600, 236],
        ["Los Santos Customs", "multiplayer_overlays", "FM_Tat_Award_M_008", "FM_Tat_Award_F_008", "ZONE_TORSO", 14100, 237],
        ["Blank Scroll", "multiplayer_overlays", "FM_Tat_Award_M_011", "FM_Tat_Award_F_011", "ZONE_TORSO", 14500, 238],
        ["Embellished Scroll", "multiplayer_overlays", "FM_Tat_Award_M_012", "FM_Tat_Award_F_012", "ZONE_TORSO", 14000, 239],
        ["Seven Deadly Sins", "multiplayer_overlays", "FM_Tat_Award_M_013", "FM_Tat_Award_F_013", "ZONE_TORSO", 13200, 240],
        ["Trust No One", "multiplayer_overlays", "FM_Tat_Award_M_014", "FM_Tat_Award_F_014", "ZONE_TORSO", 14000, 241],
        ["Clown", "multiplayer_overlays", "FM_Tat_Award_M_016", "FM_Tat_Award_F_016", "ZONE_TORSO", 13500, 242],
        ["Clown and Gun", "multiplayer_overlays", "FM_Tat_Award_M_017", "FM_Tat_Award_F_017", "ZONE_TORSO", 17900, 243],
        ["Clown Dual Wield", "multiplayer_overlays", "FM_Tat_Award_M_018", "FM_Tat_Award_F_018", "ZONE_TORSO", 16500, 244],
        ["Clown Dual Wield Dollars", "multiplayer_overlays", "FM_Tat_Award_M_019", "FM_Tat_Award_F_019", "ZONE_TORSO", 19000, 245],
        ["Faith", "multiplayer_overlays", "FM_Tat_M_004", "FM_Tat_F_004", "ZONE_TORSO", 15700, 246],
        ["Skull on the Cross", "multiplayer_overlays", "FM_Tat_M_009", "FM_Tat_F_009", "ZONE_TORSO", 17400, 247],
        ["LS Flames", "multiplayer_overlays", "FM_Tat_M_010", "FM_Tat_F_010", "ZONE_TORSO", 13900, 248],
        ["LS Script", "multiplayer_overlays", "FM_Tat_M_011", "FM_Tat_F_011", "ZONE_TORSO", 15200, 249],
        ["Los Santos Bills", "multiplayer_overlays", "FM_Tat_M_012", "FM_Tat_F_012", "ZONE_TORSO",20000, 250],
        ["Eagle and Serpent", "multiplayer_overlays", "FM_Tat_M_013", "FM_Tat_F_013", "ZONE_TORSO", 14800, 251],
        ["Evil Clown", "multiplayer_overlays", "FM_Tat_M_016", "FM_Tat_F_016", "ZONE_TORSO", 17400, 252],
        ["The Wages of Sin", "multiplayer_overlays", "FM_Tat_M_019", "FM_Tat_F_019", "ZONE_TORSO", 19000, 253],
        ["Dragon", "multiplayer_overlays", "FM_Tat_M_020", "FM_Tat_F_020", "ZONE_TORSO", 15100, 254],
        ["Flaming Cross", "multiplayer_overlays", "FM_Tat_M_024", "FM_Tat_F_024", "ZONE_TORSO", 15000, 255],
        ["LS Bold", "multiplayer_overlays", "FM_Tat_M_025", "FM_Tat_F_025", "ZONE_TORSO", 14900, 256],
        ["Trinity Knot", "multiplayer_overlays", "FM_Tat_M_029", "FM_Tat_F_029", "ZONE_TORSO", 15000, 257],
        ["Lucky Celtic Dogs", "multiplayer_overlays", "FM_Tat_M_030", "FM_Tat_F_030", "ZONE_TORSO", 14600, 258],
        ["Flaming Shamrock", "multiplayer_overlays", "FM_Tat_M_034", "FM_Tat_F_034", "ZONE_TORSO", 14400, 259],
        ["Dragon", "multiplayer_overlays", "FM_Tat_M_035", "FM_Tat_F_035", "ZONE_TORSO", 17500, 260],
        ["Way of the Gun", "multiplayer_overlays", "FM_Tat_M_036", "FM_Tat_F_036", "ZONE_TORSO", 15600, 261],
        ["Stone Cross", "multiplayer_overlays", "FM_Tat_M_044", "FM_Tat_F_044", "ZONE_TORSO", 14200, 262],
        ["Skulls and Rose", "multiplayer_overlays", "FM_Tat_M_045", "FM_Tat_F_045", "ZONE_TORSO", 17300, 263],






        /* №1 Левая рука [264 - 281] */
        ["Impotent RAGE", "singleplayer_overlays", "tp_033", "", "ZONE_LEFT_ARM", 13500, 264],
        //
        ["Трайбл - цветы", "mpbeach_overlays", "", "MP_Bea_F_LArm_000", "ZONE_LEFT_ARM", 14200, 265],
        ["Рукав", "overlays_onyx", "onyx_tattoo_07_m", "onyx_tattoo_07_f", "ZONE_LEFT_ARM", 200000, 3001],
        ["Попугай", "mpbeach_overlays", "", "MP_Bea_F_LArm_001", "ZONE_LEFT_ARM", 13500, 266],
        ["Башня тики", "mpbeach_overlays", "MP_Bea_M_LArm_000", "", "ZONE_LEFT_ARM", 11500, 267],
        ["Русалка - Лос-Сантос", "mpbeach_overlays", "MP_Bea_M_LArm_001", "", "ZONE_LEFT_ARM", 10900, 268],
        ["100-долларовая купюра", "mpbusiness_overlays", "MP_Buis_M_LeftArm_000", "", "ZONE_LEFT_ARM", 14000, 269],
        ["Всевидящее око", "mpbusiness_overlays", "MP_Buis_M_LeftArm_001", "", "ZONE_LEFT_ARM", 12500, 270],
        ["Зелень - это хорошо", "mpbusiness_overlays", "", "MP_Buis_F_LArm_000", "ZONE_LEFT_ARM", 13500, 271],
        ["Блеск алмазов", "mphipster_overlays", "FM_Hip_M_Tat_003", "FM_Hip_F_Tat_003", "ZONE_LEFT_ARM", 12900, 272],
        ["Кирпичи", "mphipster_overlays", "FM_Hip_M_Tat_007", "FM_Hip_F_Tat_007", "ZONE_LEFT_ARM", 13200, 273],
        ["Усы", "mphipster_overlays", "FM_Hip_M_Tat_015", "FM_Hip_F_Tat_015", "ZONE_LEFT_ARM", 12700, 274],
        ["Молния", "mphipster_overlays", "FM_Hip_M_Tat_016", "FM_Hip_F_Tat_016", "ZONE_LEFT_ARM", 15500, 275],
        ["Пицца", "mphipster_overlays", "FM_Hip_M_Tat_026", "FM_Hip_F_Tat_026", "ZONE_LEFT_ARM", 13900, 276],
        ["Замок", "mphipster_overlays", "FM_Hip_M_Tat_027", "FM_Hip_F_Tat_027", "ZONE_LEFT_ARM", 12900, 277],
        ["Роза с шипами", "mphipster_overlays", "FM_Hip_M_Tat_028", "FM_Hip_F_Tat_028", "ZONE_LEFT_ARM", 13700, 278],
        ["Stop", "mphipster_overlays", "FM_Hip_M_Tat_034", "FM_Hip_F_Tat_034", "ZONE_LEFT_ARM", 12800, 279],
        ["Восход", "mphipster_overlays", "FM_Hip_M_Tat_037", "FM_Hip_F_Tat_037", "ZONE_LEFT_ARM", 16800, 280],
        ["Рукав", "mphipster_overlays", "FM_Hip_M_Tat_039", "FM_Hip_F_Tat_039", "ZONE_LEFT_ARM", 15800, 281],

        /* №2 Левая рука [282 - 299] */
        ["Белый треугольник", "mphipster_overlays", "FM_Hip_M_Tat_043", "FM_Hip_F_Tat_043", "ZONE_LEFT_ARM", 12600, 282],
        ["Peace", "mphipster_overlays", "FM_Hip_M_Tat_048", "FM_Hip_F_Tat_048", "ZONE_LEFT_ARM", 13900, 283],
        ["Городской трюкач", "mpbiker_overlays", "MP_MP_Biker_Tat_012_M", "MP_MP_Biker_Tat_012_F", "ZONE_LEFT_ARM", 12400, 284],
        ["Жуткое дерево", "mpbiker_overlays", "MP_MP_Biker_Tat_016_M", "MP_MP_Biker_Tat_016_F", "ZONE_LEFT_ARM", 13100, 285],
        ["Роза из черепов", "mpbiker_overlays", "MP_MP_Biker_Tat_020_M", "MP_MP_Biker_Tat_020_F", "ZONE_LEFT_ARM", 12900, 286],
        ["Жить ради дороги", "mpbiker_overlays", "MP_MP_Biker_Tat_024_M", "MP_MP_Biker_Tat_024_F", "ZONE_LEFT_ARM", 15200, 287],
        ["Good Luck", "mpbiker_overlays", "MP_MP_Biker_Tat_025_M", "MP_MP_Biker_Tat_025_F", "ZONE_LEFT_ARM", 15400, 288],
        ["Цепь в кулаке", "mpbiker_overlays", "MP_MP_Biker_Tat_035_M", "MP_MP_Biker_Tat_035_F", "ZONE_LEFT_ARM", 11100, 289],
        ["Ride Hard Die Fast", "mpbiker_overlays", "MP_MP_Biker_Tat_045_M", "MP_MP_Biker_Tat_045_F", "ZONE_LEFT_ARM", 11800, 290],
        ["Шлем с глушителем", "mpbiker_overlays", "MP_MP_Biker_Tat_053_M", "MP_MP_Biker_Tat_053_F", "ZONE_LEFT_ARM", 12300, 291],
        ["Ядовитый скорпион", "mpbiker_overlays", "MP_MP_Biker_Tat_055_M", "MP_MP_Biker_Tat_055_F", "ZONE_LEFT_ARM", 16700, 292],
        ["Всадник-череп", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_000", "MP_Xmas2_F_Tat_000", "ZONE_LEFT_ARM", 15200, 293],
        ["Электрическая змея", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_010", "MP_Xmas2_F_Tat_010", "ZONE_LEFT_ARM", 13800, 294],
        ["Череп - бильярдный шар", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_012", "MP_Xmas2_F_Tat_012", "ZONE_LEFT_ARM", 13800, 295],
        ["Время вышло (контур)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_020", "MP_Xmas2_F_Tat_020", "ZONE_LEFT_ARM", 12400, 296],
        ["Время вышло (цвет)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_021", "MP_Xmas2_F_Tat_021", "ZONE_LEFT_ARM", 12500, 297],
        ["Викинг", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_001_M", "MP_Christmas2017_Tattoo_001_F", "ZONE_LEFT_ARM", 12900, 298],
        ["Тигр и маска", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_004_M", "MP_Christmas2017_Tattoo_004_F", "ZONE_LEFT_ARM", 13300, 299],
        
        /* №3 Левая рука [300 - 317] */
        ["Спартанцы в бою", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_007_M", "MP_Christmas2017_Tattoo_007_F", "ZONE_LEFT_ARM", 14100, 300],
        ["Катана", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_013_M", "MP_Christmas2017_Tattoo_013_F", "ZONE_LEFT_ARM", 19300, 301],
        ["Крылатый змей", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_025_M", "MP_Christmas2017_Tattoo_025_F", "ZONE_LEFT_ARM", 15100, 302],
        ["Цербер", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_029_M", "MP_Christmas2017_Tattoo_029_F", "ZONE_LEFT_ARM", 13600, 303],
        ["Пистолет", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_004_M", "MP_Gunrunning_Tattoo_004_F", "ZONE_LEFT_ARM", 14400, 304],
        ["Патронташ", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_008_M", "MP_Gunrunning_Tattoo_008_F", "ZONE_LEFT_ARM", 17900, 305],
        ["Череп на шипе", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_015_M", "MP_Gunrunning_Tattoo_015_F", "ZONE_LEFT_ARM", 14100, 306],
        ["Кровавые деньги", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_016_M", "MP_Gunrunning_Tattoo_016_F", "ZONE_LEFT_ARM", 15100, 307],
        ["Молящийся череп", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_025_M", "MP_Gunrunning_Tattoo_025_F", "ZONE_LEFT_ARM", 14400, 308],
        ["Револьвер и змея", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_027_M", "MP_Gunrunning_Tattoo_027_F", "ZONE_LEFT_ARM", 19700, 309],
        ["Сердце Tiger", "mpheist3_overlays", "mpHeist3_Tat_040_M", "mpHeist3_Tat_040_F", "ZONE_LEFT_ARM", 14900, 310],
        ["Могучий Тог", "mpheist3_overlays", "mpHeist3_Tat_041_M", "mpHeist3_Tat_041_F", "ZONE_LEFT_ARM", 13500, 311],
        ["Рукав на поршнях", "mpimportexport_overlays", "MP_MP_ImportExport_Tat_004_M", "MP_MP_ImportExport_Tat_004_F", "ZONE_LEFT_ARM", 14500, 312],
        ["Скарлетт", "mpimportexport_overlays", "MP_MP_ImportExport_Tat_008_M", "MP_MP_ImportExport_Tat_008_F", "ZONE_LEFT_ARM", 25600, 313],
        ["Нет зла", "mplowrider_overlays", "MP_LR_Tat_005_M", "MP_LR_Tat_005_F", "ZONE_LEFT_ARM", 14600, 314],
        ["Жизнь в Лос-Сантосе", "mplowrider_overlays", "MP_LR_Tat_027_M", "MP_LR_Tat_027_F", "ZONE_LEFT_ARM", 15600, 315],
        ["Городская печаль", "mplowrider_overlays", "MP_LR_Tat_033_M", "MP_LR_Tat_033_F", "ZONE_LEFT_ARM", 16900, 316],
        ["Любовные заботы", "mplowrider2_overlays", "MP_LR_Tat_006_M", "MP_LR_Tat_006_F", "ZONE_LEFT_ARM", 17800, 317],

        /* №4 Левая рука [318 - 333] */
        ["Вечеринка скелетов", "mplowrider2_overlays", "MP_LR_Tat_018_M", "MP_LR_Tat_018_F", "ZONE_LEFT_ARM", 12000, 318],
        ["Моя безумная жизнь", "mplowrider2_overlays", "MP_LR_Tat_022_M", "MP_LR_Tat_022_F", "ZONE_LEFT_ARM", 12300, 319],
        ["Честь", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_004_M", "MP_Smuggler_Tattoo_004_F", "ZONE_LEFT_ARM", 13900, 320],
        ["Чудовище из глубин", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_008_M", "MP_Smuggler_Tattoo_008_F", "ZONE_LEFT_ARM", 12500, 321],
        ["Проклятие русалки", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_014_M", "MP_Smuggler_Tattoo_014_F", "ZONE_LEFT_ARM", 12400, 322],
        ["Seductive Mechanic", "mpstunt_overlays", "MP_MP_Stunt_tat_049_M", "MP_MP_Stunt_tat_049_F", "ZONE_LEFT_ARM", 12500, 323],
        ["Масти", "mpvinewood_overlays", "MP_Vinewood_Tat_002_M", "MP_Vinewood_Tat_002_F", "ZONE_LEFT_ARM", 16400, 324],
        ["На удачу", "mpvinewood_overlays", "MP_Vinewood_Tat_005_M", "MP_Vinewood_Tat_005_F", "ZONE_LEFT_ARM", 13400, 325],
        ["Порок", "mpvinewood_overlays", "MP_Vinewood_Tat_014_M", "MP_Vinewood_Tat_014_F", "ZONE_LEFT_ARM", 13700, 326],
        ["Не всегда же побеждать", "mpvinewood_overlays", "MP_Vinewood_Tat_019_M", "MP_Vinewood_Tat_019_F", "ZONE_LEFT_ARM", 13200, 327],
        ["Роза из банкноты", "mpvinewood_overlays", "MP_Vinewood_Tat_026_M", "MP_Vinewood_Tat_026_F", "ZONE_LEFT_ARM", 14400, 328],
        ["Toxic Trails", "mpairraces_overlays", "MP_Airraces_Tattoo_003_M", "MP_Airraces_Tattoo_003_F", "ZONE_LEFT_ARM", 13500, 329],
        ["Floral Symmetry", "mpluxe_overlays", "MP_LUXE_TAT_009_M", "MP_LUXE_TAT_009_F", "ZONE_LEFT_ARM", 13300, 330],
        ["Archangel &amp; Mary", "mpluxe_overlays", "MP_LUXE_TAT_020_M", "MP_LUXE_TAT_020_F", "ZONE_LEFT_ARM", 14300, 331],
        ["Gabriel", "mpluxe_overlays", "MP_LUXE_TAT_021_M", "MP_LUXE_TAT_021_F", "ZONE_LEFT_ARM", 13300, 332],
        ["Fatal Dagger", "mpluxe2_overlays", "MP_LUXE_TAT_005_M", "MP_LUXE_TAT_005_F", "ZONE_LEFT_ARM", 16500, 333],

        /* №5 Левая рука [334 - 352] */
        ["Egyptian Mural", "mpluxe2_overlays", "MP_LUXE_TAT_016_M", "MP_LUXE_TAT_016_F", "ZONE_LEFT_ARM", 12400, 334],
        ["Divine Goddess", "mpluxe2_overlays", "MP_LUXE_TAT_018_M", "MP_LUXE_TAT_018_F", "ZONE_LEFT_ARM", 13900, 335],
        ["Python Skull", "mpluxe2_overlays", "MP_LUXE_TAT_028_M", "MP_LUXE_TAT_028_F", "ZONE_LEFT_ARM", 16000, 336],
        ["8 Eyed Skull", "mpstunt_overlays", "MP_MP_Stunt_tat_001_M", "MP_MP_Stunt_tat_001_F", "ZONE_LEFT_ARM", 12500, 337],
        ["Big Cat", "mpstunt_overlays", "MP_MP_Stunt_tat_002_M", "MP_MP_Stunt_tat_002_F", "ZONE_LEFT_ARM", 11700, 338],
        ["Moonlight Ride", "mpstunt_overlays", "MP_MP_Stunt_tat_008_M", "MP_MP_Stunt_tat_008_F", "ZONE_LEFT_ARM", 16700, 339],
        ["Piston Head", "mpstunt_overlays", "MP_MP_Stunt_tat_022_M", "MP_MP_Stunt_tat_022_F", "ZONE_LEFT_ARM", 12500, 340],
        ["Tanked", "mpstunt_overlays", "MP_MP_Stunt_tat_023_M", "MP_MP_Stunt_tat_023_F", "ZONE_LEFT_ARM", 13800, 341],
        ["Stuntman's End", "mpstunt_overlays", "MP_MP_Stunt_tat_035_M", "MP_MP_Stunt_tat_035_F", "ZONE_LEFT_ARM", 13500, 342],
        ["Kaboom", "mpstunt_overlays", "MP_MP_Stunt_tat_039_M", "MP_MP_Stunt_tat_039_F", "ZONE_LEFT_ARM", 14900, 343],
        ["Engine Arm", "mpstunt_overlays", "MP_MP_Stunt_tat_043_M", "MP_MP_Stunt_tat_043_F", "ZONE_LEFT_ARM", 11200, 344],
        ["Burning Heart", "multiplayer_overlays", "FM_Tat_Award_M_001", "FM_Tat_Award_F_001", "ZONE_LEFT_ARM", 14800, 345],
        ["Racing Blonde", "multiplayer_overlays", "FM_Tat_Award_M_007", "FM_Tat_Award_F_007", "ZONE_LEFT_ARM", 14900, 346],
        ["Racing Brunette", "multiplayer_overlays", "FM_Tat_Award_M_015", "FM_Tat_Award_F_015", "ZONE_LEFT_ARM", 13400, 347],
        ["Serpents", "multiplayer_overlays", "FM_Tat_M_005", "FM_Tat_F_005", "ZONE_LEFT_ARM", 12500, 348],
        ["Oriental Mural", "multiplayer_overlays", "FM_Tat_M_006", "FM_Tat_F_006", "ZONE_LEFT_ARM", 12600, 349],
        ["Zodiac Skull", "multiplayer_overlays", "FM_Tat_M_015", "FM_Tat_F_015", "ZONE_LEFT_ARM", 13100, 350],
        ["Lady M", "multiplayer_overlays", "FM_Tat_M_031", "FM_Tat_F_031", "ZONE_LEFT_ARM", 16900, 351],
        ["Dope Skull", "multiplayer_overlays", "FM_Tat_M_041", "FM_Tat_F_041", "ZONE_LEFT_ARM", 15700, 352],










        /* №1 Правая нога [353 - 389] */
        ["Косяк рыбы", "mpbeach_overlays", "", "MP_Bea_F_RLeg_000", "ZONE_RIGHT_LEG", 12800, 353],
        ["Узор Башня тики", "mpbeach_overlays", "MP_Bea_M_Rleg_000", "", "ZONE_RIGHT_LEG", 12600, 354],
        ["Алмазная корона", "mpbusiness_overlays", "", "MP_Buis_F_RLeg_000", "ZONE_RIGHT_LEG", 12500, 355],
        ["Еда", "mphipster_overlays", "FM_Hip_M_Tat_038", "FM_Hip_F_Tat_038", "ZONE_RIGHT_LEG", 14000, 356],
        ["Свеча зажигания", "mphipster_overlays", "FM_Hip_M_Tat_042", "FM_Hip_F_Tat_042", "ZONE_RIGHT_LEG", 14500, 357],
        ["Ярость дракона", "mpbiker_overlays", "MP_MP_Biker_Tat_004_M", "MP_MP_Biker_Tat_004_F", "ZONE_RIGHT_LEG", 12800, 358],
        ["Символ Western", "mpbiker_overlays", "MP_MP_Biker_Tat_022_M", "MP_MP_Biker_Tat_022_F", "ZONE_RIGHT_LEG", 13900, 359],
        ["Навстречу закату", "mpbiker_overlays", "MP_MP_Biker_Tat_028_M", "MP_MP_Biker_Tat_028_F", "ZONE_RIGHT_LEG", 14500, 360],

        /* №2 Правая нога [361 - 368] */
        ["American Made", "mpbiker_overlays", "MP_MP_Biker_Tat_040_M", "MP_MP_Biker_Tat_040_F", "ZONE_RIGHT_LEG", 14100, 361],
        ["STFU", "mpbiker_overlays", "MP_MP_Biker_Tat_048_M", "MP_MP_Biker_Tat_048_F", "ZONE_RIGHT_LEG", 13900, 362],
        ["Кинжал с орнаментом", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_014", "MP_Xmas2_F_Tat_014", "ZONE_RIGHT_LEG", 13400, 363],
        ["Боевой череп", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_006_M", "MP_Gunrunning_Tattoo_006_F", "ZONE_RIGHT_LEG", 14600, 364],
        ["Неприкаянный череп", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_026_M", "MP_Gunrunning_Tattoo_026_F", "ZONE_RIGHT_LEG", 13800, 365],
        ["Тузы и пистолет", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_030_M", "MP_Gunrunning_Tattoo_030_F", "ZONE_RIGHT_LEG", 14400, 366],
        ["Kifflom", "mpheist3_overlays", "mpHeist3_Tat_031_M", "mpHeist3_Tat_031_F", "ZONE_RIGHT_LEG", 13500, 367],
        ["Сделай мне тату", "mplowrider_overlays", "MP_LR_Tat_017_M", "MP_LR_Tat_017_F", "ZONE_RIGHT_LEG", 13400, 368],

        /* №3 Правая нога [369 - 376] */
        ["Танец сердец", "mplowrider_overlays", "MP_LR_Tat_023_M", "MP_LR_Tat_023_F", "ZONE_RIGHT_LEG", 13600, 369],
        ["Молитва San Andreas", "mplowrider2_overlays", "MP_LR_Tat_030_M", "MP_LR_Tat_030_F", "ZONE_RIGHT_LEG", 12800, 370],
        ["Курс – домой", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_020_M", "MP_Smuggler_Tattoo_020_F", "ZONE_RIGHT_LEG", 13600, 371],
        ["Деньги правят миром", "mpvinewood_overlays", "MP_Vinewood_Tat_020_M", "MP_Vinewood_Tat_020_F", "ZONE_RIGHT_LEG", 13200, 372],
        ["Elaborate Los Muertos", "mpluxe_overlays", "MP_LUXE_TAT_001_M", "MP_LUXE_TAT_001_F", "ZONE_RIGHT_LEG", 12600, 373],
        ["Starmetric", "mpluxe2_overlays", "MP_LUXE_TAT_023_M", "MP_LUXE_TAT_023_F", "ZONE_RIGHT_LEG", 14300, 374],
        ["Demon Spark Plug", "mpstunt_overlays", "MP_MP_Stunt_tat_005_M", "MP_MP_Stunt_tat_005_F", "ZONE_RIGHT_LEG", 13400, 375],
        ["Praying Gloves", "mpstunt_overlays", "MP_MP_Stunt_tat_015_M", "MP_MP_Stunt_tat_015_F", "ZONE_RIGHT_LEG", 15700, 376],

        /* №4 Правая нога [376 - 383] */
        ["Piston Angel", "mpstunt_overlays", "MP_MP_Stunt_tat_020_M", "MP_MP_Stunt_tat_020_F", "ZONE_RIGHT_LEG", 13900, 377],
        ["Speed Freak", "mpstunt_overlays", "MP_MP_Stunt_tat_025_M", "MP_MP_Stunt_tat_025_F", "ZONE_RIGHT_LEG", 13700, 378],
        ["Wheelie Mouse", "mpstunt_overlays", "MP_MP_Stunt_tat_032_M", "MP_MP_Stunt_tat_032_F", "ZONE_RIGHT_LEG", 12400, 379],
        ["Severed Hand", "mpstunt_overlays", "MP_MP_Stunt_tat_045_M", "MP_MP_Stunt_tat_045_F", "ZONE_RIGHT_LEG", 13800, 380],
        ["Brake Knife", "mpstunt_overlays", "MP_MP_Stunt_tat_047_M", "MP_MP_Stunt_tat_047_F", "ZONE_RIGHT_LEG", 12600, 381],
        ["Skull and Sword", "multiplayer_overlays", "FM_Tat_Award_M_006", "FM_Tat_Award_F_006", "ZONE_RIGHT_LEG", 14000, 382],
        ["The Warrior", "multiplayer_overlays", "FM_Tat_M_007", "FM_Tat_F_007", "ZONE_RIGHT_LEG", 13600, 383],

        /* №5 Правая нога [384 - 389] */
        ["Tribal", "multiplayer_overlays", "FM_Tat_M_017", "FM_Tat_F_017", "ZONE_RIGHT_LEG", 17200, 384],
        ["Fiery Dragon", "multiplayer_overlays", "FM_Tat_M_022", "FM_Tat_F_022", "ZONE_RIGHT_LEG", 16600, 385],
        ["Broken Skull", "multiplayer_overlays", "FM_Tat_M_039", "FM_Tat_F_039", "ZONE_RIGHT_LEG", 15900, 386],
        ["Flaming Skull", "multiplayer_overlays", "FM_Tat_M_040", "FM_Tat_F_040", "ZONE_RIGHT_LEG", 13470, 387],
        ["Flaming Scorpion", "multiplayer_overlays", "FM_Tat_M_042", "FM_Tat_F_042", "ZONE_RIGHT_LEG", 12900, 388],
        ["Indian Ram", "multiplayer_overlays", "FM_Tat_M_043", "FM_Tat_F_043", "ZONE_RIGHT_LEG", 13800, 389],






        /* №1 Правая рука [390 - 406] */
        ["Рукав", "overlays_onyx", "onyx_tattoo_06_m", "onyx_tattoo_06_f", "ZONE_RIGHT_ARM", 200000, 3002],
        ["Трайбл - рыба", "mpbeach_overlays", "", "MP_Bea_F_RArm_001", "ZONE_RIGHT_ARM", 12100, 390],
        ["Узор Солнце", "mpbeach_overlays", "MP_Bea_M_RArm_000", "", "ZONE_RIGHT_ARM", 13400, 391],
        ["Красотка из Веспуччи", "mpbeach_overlays", "MP_Bea_M_RArm_001", "", "ZONE_RIGHT_ARM", 12900, 392],
        ["Череп с долларом", "mpbusiness_overlays", "MP_Buis_M_RightArm_000", "", "ZONE_RIGHT_ARM", 13800, 393],
        ["Зелень", "mpbusiness_overlays", "MP_Buis_M_RightArm_001", "", "ZONE_RIGHT_ARM", 12500, 394],
        ["Знак доллара", "mpbusiness_overlays", "", "MP_Buis_F_RArm_000", "ZONE_RIGHT_ARM", 13400, 395],
        ["Стрела", "mphipster_overlays", "FM_Hip_M_Tat_001", "FM_Hip_F_Tat_001", "ZONE_RIGHT_ARM", 12800, 396],
        ["Кость", "mphipster_overlays", "FM_Hip_M_Tat_004", "FM_Hip_F_Tat_004", "ZONE_RIGHT_ARM", 13800, 397],
        ["Куб", "mphipster_overlays", "FM_Hip_M_Tat_008", "FM_Hip_F_Tat_008", "ZONE_RIGHT_ARM", 13400, 398],
        ["Подкова", "mphipster_overlays", "FM_Hip_M_Tat_010", "FM_Hip_F_Tat_010", "ZONE_RIGHT_ARM", 14900, 399],
        ["Баллончик", "mphipster_overlays", "FM_Hip_M_Tat_014", "FM_Hip_F_Tat_014", "ZONE_RIGHT_ARM", 15600, 400],
        ["Глаз в треугольнике", "mphipster_overlays", "FM_Hip_M_Tat_017", "FM_Hip_F_Tat_017", "ZONE_RIGHT_ARM", 16800, 401],
        ["Оригами", "mphipster_overlays", "FM_Hip_M_Tat_018", "FM_Hip_F_Tat_018", "ZONE_RIGHT_ARM", 12400, 402],
        ["Узор Geo", "mphipster_overlays", "FM_Hip_M_Tat_020", "FM_Hip_F_Tat_020", "ZONE_RIGHT_ARM", 13800, 403],
        ["Карандаш", "mphipster_overlays", "FM_Hip_M_Tat_022", "FM_Hip_F_Tat_022", "ZONE_RIGHT_ARM", 15000, 404],
        ["Смайлик", "mphipster_overlays", "FM_Hip_M_Tat_023", "FM_Hip_F_Tat_023", "ZONE_RIGHT_ARM", 14700, 405],
        ["Фигуры", "mphipster_overlays", "FM_Hip_M_Tat_036", "FM_Hip_F_Tat_036", "ZONE_RIGHT_ARM", 14900, 406],

        /* №2 Правая рука [407 - 423] */
        ["Черный треугольник", "mphipster_overlays", "FM_Hip_M_Tat_044", "FM_Hip_F_Tat_044", "ZONE_RIGHT_ARM", 14300, 407],
        ["Сетка", "mphipster_overlays", "FM_Hip_M_Tat_045", "FM_Hip_F_Tat_045", "ZONE_RIGHT_ARM", 13800, 408],
        ["Парящий орел", "mpbiker_overlays", "MP_MP_Biker_Tat_007_M", "MP_MP_Biker_Tat_007_F", "ZONE_RIGHT_ARM", 13900, 409],
        ["Госпожа Смерть", "mpbiker_overlays", "MP_MP_Biker_Tat_014_M", "MP_MP_Biker_Tat_014_F", "ZONE_RIGHT_ARM", 12300, 410],
        ["Орел", "mpbiker_overlays", "MP_MP_Biker_Tat_033_M", "MP_MP_Biker_Tat_033_F", "ZONE_RIGHT_ARM", 12500, 411],
        ["Мрачный ездок", "mpbiker_overlays", "MP_MP_Biker_Tat_042_M", "MP_MP_Biker_Tat_042_F", "ZONE_RIGHT_ARM", 13900, 412],
        ["Череп на цепи", "mpbiker_overlays", "MP_MP_Biker_Tat_046_M", "MP_MP_Biker_Tat_046_F", "ZONE_RIGHT_ARM", 14600, 413],
        ["Змеиный укус", "mpbiker_overlays", "MP_MP_Biker_Tat_047_M", "MP_MP_Biker_Tat_047_F", "ZONE_RIGHT_ARM", 13600, 414],
        ["These Colors Don't Run", "mpbiker_overlays", "MP_MP_Biker_Tat_049_M", "MP_MP_Biker_Tat_049_F", "ZONE_RIGHT_ARM", 16100, 415],
        ["Mum", "mpbiker_overlays", "MP_MP_Biker_Tat_054_M", "MP_MP_Biker_Tat_054_F", "ZONE_RIGHT_ARM", 13300, 416],
        ["Змея (контур)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_003", "MP_Xmas2_F_Tat_003", "ZONE_RIGHT_ARM", 14000, 417],
        ["Змея (тень)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_004", "MP_Xmas2_F_Tat_004", "ZONE_RIGHT_ARM", 13500, 418],
        ["Лучше смерть, чем позор", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_008", "MP_Xmas2_F_Tat_008", 16200, 419],
        ["Ты следующий (контур)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_022", "MP_Xmas2_F_Tat_022", "ZONE_RIGHT_ARM", 11100, 420],
        ["Ты следующий (цвет)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_023", "MP_Xmas2_F_Tat_023", "ZONE_RIGHT_ARM", 13500, 421],
        ["Fuck Luck (контур)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_026", "MP_Xmas2_F_Tat_026", "ZONE_RIGHT_ARM", 12200, 422],
        ["Fuck Luck (цвет)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_027", "MP_Xmas2_F_Tat_027", "ZONE_RIGHT_ARM", 14900, 423],

        /* №3 Правая рука [424 - 440] */
        ["Медуза", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_006_M", "MP_Christmas2017_Tattoo_006_F", "ZONE_RIGHT_ARM", 12000, 424],
        ["Шапка из тигра", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_012_M", "MP_Christmas2017_Tattoo_012_F", "ZONE_RIGHT_ARM", 13200, 425],
        ["Кельтский узор", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_014_M", "MP_Christmas2017_Tattoo_014_F", "ZONE_RIGHT_ARM", 12900, 426],
        ["Пернатый рукав", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_017_M", "MP_Christmas2017_Tattoo_017_F", "ZONE_RIGHT_ARM", 14600, 427],
        ["Разрыв мышцы", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_018_M", "MP_Christmas2017_Tattoo_018_F", "ZONE_RIGHT_ARM", 13400, 428],
        ["Самурайский парусник", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_023_M", "MP_Christmas2017_Tattoo_023_F", "ZONE_RIGHT_ARM", 15100, 429],
        ["Фреска со спартанцами", "mpchristmas2017_overlays", "MP_Christmas2017_Tattoo_028_M", "MP_Christmas2017_Tattoo_028_F", "ZONE_RIGHT_ARM", 13600, 430],
        ["Граната", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_002_M", "MP_Gunrunning_Tattoo_002_F", "ZONE_RIGHT_ARM", 13100, 431],
        ["Всего доброго!", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_021_M", "MP_Gunrunning_Tattoo_021_F", "ZONE_RIGHT_ARM", 13600, 432],
        ["Смерть с косой в шлеме", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_024_M", "MP_Gunrunning_Tattoo_024_F", "ZONE_RIGHT_ARM", 13100, 433],
        ["Монограмма LS", "mpheist3_overlays", "mpHeist3_Tat_034_M", "mpHeist3_Tat_034_F", "ZONE_RIGHT_ARM", 13400, 434],
        ["Механический рукав", "mpimportexport_overlays", "MP_MP_ImportExport_Tat_003_M", "MP_MP_ImportExport_Tat_003_F", "ZONE_RIGHT_ARM", 14200, 435],
        ["Отточенный", "mpimportexport_overlays", "MP_MP_ImportExport_Tat_005_M", "MP_MP_ImportExport_Tat_005_F", "ZONE_RIGHT_ARM", 13800, 436],
        ["В огне", "mpimportexport_overlays", "MP_MP_ImportExport_Tat_006_M", "MP_MP_ImportExport_Tat_006_F", "ZONE_RIGHT_ARM", 15300, 437],
        ["Вечный путь", "mpimportexport_overlays", "MP_MP_ImportExport_Tat_007_M", "MP_MP_ImportExport_Tat_007_F", "ZONE_RIGHT_ARM", 13200, 438],
        ["Соблазнительница", "mplowrider_overlays", "MP_LR_Tat_015_M", "MP_LR_Tat_015_F", "ZONE_RIGHT_ARM", 13700, 439],
        ["Леди-вампир", "mplowrider2_overlays", "MP_LR_Tat_003_M", "MP_LR_Tat_003_F", "ZONE_RIGHT_ARM", 17800, 440],

        /* №4 Правая рука [441 - 457] */
        ["Люблю Los Muertos", "mplowrider2_overlays", "MP_LR_Tat_028_M", "MP_LR_Tat_028_F", "ZONE_RIGHT_ARM", 13400, 441],
        ["Черные слезы", "mplowrider2_overlays", "MP_LR_Tat_035_M", "MP_LR_Tat_035_F", "ZONE_RIGHT_ARM", 17200, 442],
        ["Снайпер", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_001_M", "MP_Smuggler_Tattoo_001_F", "ZONE_RIGHT_ARM", 14100, 443],
        ["Бунт", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_005_M", "MP_Smuggler_Tattoo_005_F", "ZONE_RIGHT_ARM", 12600, 444],
        ["Стилизованный кракен", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_023_M", "MP_Smuggler_Tattoo_023_F", "ZONE_RIGHT_ARM", 13800, 445],
        ["Госпожа Удача", "mpvinewood_overlays", "MP_Vinewood_Tat_004_M", "MP_Vinewood_Tat_004_F", "ZONE_RIGHT_ARM", 14002, 446],
        ["Жизнь игрока", "mpvinewood_overlays", "MP_Vinewood_Tat_018_M", "MP_Vinewood_Tat_018_F", "ZONE_RIGHT_ARM", 13500, 447],
        ["Дама роз", "mpvinewood_overlays", "MP_Vinewood_Tat_025_M", "MP_Vinewood_Tat_025_F", "ZONE_RIGHT_ARM", 13400, 448],
        ["Череп и тузы", "mpvinewood_overlays", "MP_Vinewood_Tat_028_M", "MP_Vinewood_Tat_028_F", "ZONE_RIGHT_ARM", 14600, 449],
        ["Floral Raven", "mpluxe_overlays", "MP_LUXE_TAT_004_M", "MP_LUXE_TAT_004_F", "ZONE_RIGHT_ARM", 15300, 450],
        ["Mermaid Harpist", "mpluxe_overlays", "MP_LUXE_TAT_013_M", "MP_LUXE_TAT_013_F", "ZONE_RIGHT_ARM", 14200, 451],
        ["Geisha Bloom", "mpluxe_overlays", "MP_LUXE_TAT_019_M", "MP_LUXE_TAT_019_F", "ZONE_RIGHT_ARM", 13600, 452],
        ["Intrometric", "mpluxe2_overlays", "MP_LUXE_TAT_010_M", "MP_LUXE_TAT_010_F", "ZONE_RIGHT_ARM", 13400, 453],
        ["Heavenly Deity", "mpluxe2_overlays", "MP_LUXE_TAT_017_M", "MP_LUXE_TAT_017_F", "ZONE_RIGHT_ARM", 13800, 454],
        ["Floral Print", "mpluxe2_overlays", "MP_LUXE_TAT_026_M", "MP_LUXE_TAT_026_F", "ZONE_RIGHT_ARM", 14900, 455],
        ["Geometric Design", "mpluxe2_overlays", "MP_LUXE_TAT_030_M", "MP_LUXE_TAT_030_F", "ZONE_RIGHT_ARM", 16800, 456],
        ["Poison Wrench", "mpstunt_overlays", "MP_MP_Stunt_tat_003_M", "MP_MP_Stunt_tat_003_F", "ZONE_RIGHT_ARM", 16400, 457],

        /* №5 Правая рука [458 - 473] */
        ["Arachnid of Death", "mpstunt_overlays", "MP_MP_Stunt_tat_009_M", "MP_MP_Stunt_tat_009_F", "ZONE_RIGHT_ARM", 13500, 458],
        ["Grave Vulture", "mpstunt_overlays", "MP_MP_Stunt_tat_010_M", "MP_MP_Stunt_tat_010_F", "ZONE_RIGHT_ARM", 13500, 459],
        ["Coffin Racer", "mpstunt_overlays", "MP_MP_Stunt_tat_016_M", "MP_MP_Stunt_tat_016_F", "ZONE_RIGHT_ARM", 14500, 460],
        ["Biker Stallion", "mpstunt_overlays", "MP_MP_Stunt_tat_036_M", "MP_MP_Stunt_tat_036_F", "ZONE_RIGHT_ARM", 13500, 461],
        ["One Down Five Up", "mpstunt_overlays", "MP_MP_Stunt_tat_038_M", "MP_MP_Stunt_tat_038_F", "ZONE_RIGHT_ARM", 16100, 462],
        ["Grim Reaper Smoking Gun", "multiplayer_overlays", "FM_Tat_Award_M_002", "FM_Tat_Award_F_002", "ZONE_RIGHT_ARM", 14900, 463],
        ["Ride or Die", "multiplayer_overlays", "FM_Tat_Award_M_010", "FM_Tat_Award_F_010", "ZONE_RIGHT_ARM", 15600, 464],
        ["Brotherhood", "multiplayer_overlays", "FM_Tat_M_000", "FM_Tat_F_000", "ZONE_RIGHT_ARM", 14500, 465],
        ["Dragons", "multiplayer_overlays", "FM_Tat_M_001", "FM_Tat_F_001", "ZONE_RIGHT_ARM", 13560, 466],
        ["Dragons and Skull", "multiplayer_overlays", "FM_Tat_M_003", "FM_Tat_F_003", "ZONE_RIGHT_ARM", 13400, 467],
        ["Flower Mural", "multiplayer_overlays", "FM_Tat_M_014", "FM_Tat_F_014", "ZONE_RIGHT_ARM", 15800, 468],
        ["Serpent Skull", "multiplayer_overlays", "FM_Tat_M_018", "FM_Tat_F_018", "ZONE_RIGHT_ARM", 14200, 469],
        ["Virgin Mary", "multiplayer_overlays", "FM_Tat_M_027", "FM_Tat_F_027", "ZONE_RIGHT_ARM", 13500, 470],
        ["Mermaid", "multiplayer_overlays", "FM_Tat_M_028", "FM_Tat_F_028", "ZONE_RIGHT_ARM", 13200, 471],
        ["Dagger", "multiplayer_overlays", "FM_Tat_M_038", "FM_Tat_F_038", "ZONE_RIGHT_ARM", 17800, 472],
        ["Lion", "multiplayer_overlays", "FM_Tat_M_047", "FM_Tat_F_047", "ZONE_RIGHT_ARM", 18600, 473],







        /* №1 Голова [474 - 484] */
        ["Трайбл - бабочка", "mpbeach_overlays", "", "MP_Bea_F_Neck_000", "ZONE_HEAD", 13400, 474],
        ["Пиратский череп", "mpbeach_overlays", "MP_Bea_M_Head_000", "", "ZONE_HEAD", 12500, 475],
        ["Серфинг - Лос-Сантос", "mpbeach_overlays", "MP_Bea_M_Head_001", "", "ZONE_HEAD", 12400, 476],
        ["Акула", "mpbeach_overlays", "MP_Bea_M_Head_002", "", "ZONE_HEAD", 12400, 477],
        ["Рыбка", "mpbeach_overlays", "MP_Bea_M_Neck_000", "", "ZONE_HEAD", 12400, 478],
        ["Время серфинга", "mpbeach_overlays", "MP_Bea_M_Neck_001", "", "ZONE_HEAD", 13400, 479],
        ["Богатей", "mpbusiness_overlays", "MP_Buis_M_Neck_000", "", "ZONE_HEAD", 11200, 480],
        ["Жирный знак доллара", "mpbusiness_overlays", "MP_Buis_M_Neck_001", "", "ZONE_HEAD", 12600, 481],
        ["Знак доллара (курсив)", "mpbusiness_overlays", "MP_Buis_M_Neck_002", "", "ZONE_HEAD", 11400, 482],
        ["100 $", "mpbusiness_overlays", "MP_Buis_M_Neck_003", "", "ZONE_HEAD", 12500, 483],
        ["Логотип Val-de-Grace", "mpbusiness_overlays", "", "MP_Buis_F_Neck_000", "ZONE_HEAD", 12800, 484],

        /* №2 Голова [485 - 495] */
        ["Розочка из денег", "mpbusiness_overlays", "", "MP_Buis_F_Neck_001", "ZONE_HEAD", 14600, 485],
        ["Красивый глаз", "mphipster_overlays", "FM_Hip_M_Tat_005", "FM_Hip_F_Tat_005", "ZONE_HEAD", 14700, 486],
        ["Узор Fox", "mphipster_overlays", "FM_Hip_M_Tat_021", "FM_Hip_F_Tat_021", "ZONE_HEAD", 12400, 487],
        ["Жуткий паук", "mpbiker_overlays", "MP_MP_Biker_Tat_009_M", "MP_MP_Biker_Tat_009_F", "ZONE_HEAD", 13300, 488],
        ["FTW", "mpbiker_overlays", "MP_MP_Biker_Tat_038_M", "MP_MP_Biker_Tat_038_F", "ZONE_HEAD", 13300, 489],
        ["Western (стилизованная)", "mpbiker_overlays", "MP_MP_Biker_Tat_051_M", "MP_MP_Biker_Tat_051_F", "ZONE_HEAD", 12600, 490],
        ["Los Muertos", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_007", "MP_Xmas2_F_Tat_007", "ZONE_HEAD", 13600, 491],
        ["Голова змеи (контур)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_024", "MP_Xmas2_F_Tat_024", "ZONE_HEAD", 13500, 492],
        ["Голова змеи (цвет)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_025", "MP_Xmas2_F_Tat_025", "ZONE_HEAD", 13400, 493],
        ["Красивая смерть", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_029", "MP_Xmas2_F_Tat_029", "ZONE_HEAD", 13900, 494],
        ["Оружие к бою", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_003_M", "MP_Gunrunning_Tattoo_003_F", "ZONE_HEAD", 14700, 495],

        /* №3 Голова [496 - 506] */
        ["Пять звезд", "mpheist3_overlays", "mpHeist3_Tat_000_M", "mpHeist3_Tat_000_F", "ZONE_HEAD", 12900, 496],
        ["Пиковый туз", "mpheist3_overlays", "mpHeist3_Tat_001_M", "mpHeist3_Tat_001_F", "ZONE_HEAD", 14500, 497],
        ["Animal", "mpheist3_overlays", "mpHeist3_Tat_002_M", "mpHeist3_Tat_002_F", "ZONE_HEAD", 13300, 498],
        ["Штурмовая винтовка", "mpheist3_overlays", "mpHeist3_Tat_003_M", "mpHeist3_Tat_003_F", "ZONE_HEAD", 12400, 499],
        ["Пластырь", "mpheist3_overlays", "mpHeist3_Tat_004_M", "mpHeist3_Tat_004_F", "ZONE_HEAD", 12400, 500],
        ["Пики", "mpheist3_overlays", "mpHeist3_Tat_005_M", "mpHeist3_Tat_005_F", "ZONE_HEAD", 13400, 501],
        ["Корона", "mpheist3_overlays", "mpHeist3_Tat_006_M", "mpHeist3_Tat_006_F", "ZONE_HEAD", 15900, 502],
        ["Два рога", "mpheist3_overlays", "mpHeist3_Tat_007_M", "mpHeist3_Tat_007_F", "ZONE_HEAD", 16100, 503],
        ["Мороженное", "mpheist3_overlays", "mpHeist3_Tat_008_M", "mpHeist3_Tat_008_F", "ZONE_HEAD", 13300, 504],
        ["Ножевое ранение", "mpheist3_overlays", "mpHeist3_Tat_009_M", "mpHeist3_Tat_009_F", "ZONE_HEAD", 13300, 505],
        ["Травка", "mpheist3_overlays", "mpHeist3_Tat_010_M", "mpHeist3_Tat_010_F", "ZONE_HEAD", 13100, 506],

        /* №4 Голова [507 - 515] */
        ["Поцелуй", "mpheist3_overlays", "mpHeist3_Tat_011_M", "mpHeist3_Tat_011_F", "ZONE_HEAD", 12500, 507],
        ["Лезвие на палочке", "mpheist3_overlays", "mpHeist3_Tat_012_M", "mpHeist3_Tat_012_F", "ZONE_HEAD", 13200, 508],
        ["Звезда LS", "mpheist3_overlays", "mpHeist3_Tat_013_M", "mpHeist3_Tat_013_F", "ZONE_HEAD", 13400, 509],
        ["Крылья LS", "mpheist3_overlays", "mpHeist3_Tat_014_M", "mpHeist3_Tat_014_F", "ZONE_HEAD", 13200, 510],
        ["Вкл/выкл", "mpheist3_overlays", "mpHeist3_Tat_015_M", "mpHeist3_Tat_015_F", "ZONE_HEAD", 14600, 511],
        ["Sleepy", "mpheist3_overlays", "mpHeist3_Tat_016_M", "mpHeist3_Tat_016_F", "ZONE_HEAD", 16200, 512],
        ["Космо-обезьяна", "mpheist3_overlays", "mpHeist3_Tat_017_M", "mpHeist3_Tat_017_F", "ZONE_HEAD", 15900, 513],
        ["Швы", "mpheist3_overlays", "mpHeist3_Tat_018_M", "mpHeist3_Tat_018_F", "ZONE_HEAD", 12900, 514],
        ["Мишка", "mpheist3_overlays", "mpHeist3_Tat_019_M", "mpHeist3_Tat_019_F", "ZONE_HEAD", 14600, 515],

        /* №5 Голова [516 - 526] */
        ["НЛО", "mpheist3_overlays", "mpHeist3_Tat_020_M", "mpHeist3_Tat_020_F", "ZONE_HEAD", 13300, 516],
        ["Wanted", "mpheist3_overlays", "mpHeist3_Tat_021_M", "mpHeist3_Tat_021_F", "ZONE_HEAD", 14300, 517],        
        ["Меч Тога", "mpheist3_overlays", "mpHeist3_Tat_022_M", "mpHeist3_Tat_022_F", "ZONE_HEAD", 12500, 518],
        ["Грешник", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_011_M", "MP_Smuggler_Tattoo_011_F", "ZONE_HEAD", 13500, 519],
        ["Вор", "mpsmuggler_overlays", "MP_Smuggler_Tattoo_012_M", "MP_Smuggler_Tattoo_012_F", "ZONE_HEAD", 14000, 520],
        ["Каскадерский череп", "mpstunt_overlays", "MP_MP_Stunt_Tat_000_M", "MP_MP_Stunt_Tat_000_F", "ZONE_HEAD", 12900, 521],
        ["Scorpion", "mpstunt_overlays", "MP_MP_Stunt_tat_004_M", "MP_MP_Stunt_tat_004_F", "ZONE_HEAD", 15900, 522],
        ["Toxic Spider", "mpstunt_overlays", "MP_MP_Stunt_tat_006_M", "MP_MP_Stunt_tat_006_F", "ZONE_HEAD", 13800, 523],
        ["Bat Wheel", "mpstunt_overlays", "MP_MP_Stunt_tat_017_M", "MP_MP_Stunt_tat_017_F", "ZONE_HEAD", 13500, 524],
        ["Flaming Quad", "mpstunt_overlays", "MP_MP_Stunt_tat_042_M", "MP_MP_Stunt_tat_042_F", "ZONE_HEAD", 14100, 525],
        ["Skull", "multiplayer_overlays", "FM_Tat_Award_M_000", "FM_Tat_Award_F_000", "ZONE_HEAD", 13900, 526],






        /* №1 Левая нога [527 - 531] */
        ["Узор Звезда", "mpbeach_overlays", "MP_Bea_M_Lleg_000", "", "ZONE_LEFT_LEG", 13900, 527],
        ["Единица", "mpbusiness_overlays", "", "MP_Buis_F_LLeg_000", "ZONE_LEFT_LEG", 14200, 528],
        ["Квадраты", "mphipster_overlays", "FM_Hip_M_Tat_009", "FM_Hip_F_Tat_009", "ZONE_LEFT_LEG", 13300, 529],
        ["Талисман", "mphipster_overlays", "FM_Hip_M_Tat_019", "FM_Hip_F_Tat_019", "ZONE_LEFT_LEG", 15800, 530],
        ["Черный якорь", "mphipster_overlays", "FM_Hip_M_Tat_040", "FM_Hip_F_Tat_040", "ZONE_LEFT_LEG", 16700, 531],

        /* №2 Левая нога [532 - 538] */
        ["Роза", "mpbiker_overlays", "MP_MP_Biker_Tat_002_M", "MP_MP_Biker_Tat_002_F", "ZONE_LEFT_LEG", 14200, 532],    
        ["Байкер навсегда", "mpbiker_overlays", "MP_MP_Biker_Tat_015_M", "MP_MP_Biker_Tat_015_F", "ZONE_LEFT_LEG", 13300, 533],
        ["Bad Luck", "mpbiker_overlays", "MP_MP_Biker_Tat_027_M", "MP_MP_Biker_Tat_027_F", "ZONE_LEFT_LEG", 14600, 534],
        ["Пламенный череп", "mpbiker_overlays", "MP_MP_Biker_Tat_036_M", "MP_MP_Biker_Tat_036_F", "ZONE_LEFT_LEG", 13100, 535],
        ["Выжженная душа", "mpbiker_overlays", "MP_MP_Biker_Tat_037_M", "MP_MP_Biker_Tat_037_F", "ZONE_LEFT_LEG", 15500, 536],
        ["Ride Free", "mpbiker_overlays", "MP_MP_Biker_Tat_044_M", "MP_MP_Biker_Tat_044_F", "ZONE_LEFT_LEG", 16600, 537],
        ["Костяной байк", "mpbiker_overlays", "MP_MP_Biker_Tat_056_M", "MP_MP_Biker_Tat_056_F", "ZONE_LEFT_LEG", 17900, 538],

        /* №3 Левая нога [539 - 547] */
        ["Смеющийся череп", "mpbiker_overlays", "MP_MP_Biker_Tat_057_M", "MP_MP_Biker_Tat_057_F", "ZONE_LEFT_LEG", 13900, 539],
        ["Паук (контур)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_001", "MP_Xmas2_F_Tat_001", "ZONE_LEFT_LEG", 14500, 540],
        ["Паук (цвет)", "mpchristmas2_overlays", "MP_Xmas2_M_Tat_002", "MP_Xmas2_F_Tat_002", "ZONE_LEFT_LEG", 14600, 541],
        ["Патриотический череп", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_005_M", "MP_Gunrunning_Tattoo_005_F", "ZONE_LEFT_LEG", 15400, 542],
        ["Стилизованный тигр", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_007_M", "MP_Gunrunning_Tattoo_007_F", "ZONE_LEFT_LEG", 16900, 543],
        ["Череп в огне", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_011_M", "MP_Gunrunning_Tattoo_011_F", "ZONE_LEFT_LEG", 15400, 544],
        ["Револьвер и розы", "mpgunrunning_overlays", "MP_Gunrunning_Tattoo_023_M", "MP_Gunrunning_Tattoo_023_F", "ZONE_LEFT_LEG", 16300, 545],
        ["Love Fist", "mpheist3_overlays", "mpHeist3_Tat_032_M", "mpHeist3_Tat_032_F", "ZONE_LEFT_LEG", 16600, 546],
        ["Змей из ЛС", "mplowrider_overlays", "MP_LR_Tat_007_M", "MP_LR_Tat_007_F", "ZONE_LEFT_LEG", 16800, 547],

        /* №4 Левая нога [548 - 555] */
        ["Президенты", "mplowrider_overlays", "MP_LR_Tat_020_M", "MP_LR_Tat_020_F", "ZONE_LEFT_LEG", 16600, 548],
        ["Любовь до гроба", "mplowrider2_overlays", "MP_LR_Tat_029_M", "MP_LR_Tat_029_F", "ZONE_LEFT_LEG", 20000, 549],
        ["Однорукий бандит", "mpvinewood_overlays", "MP_Vinewood_Tat_013_M", "MP_Vinewood_Tat_013_F", "ZONE_LEFT_LEG", 13200, 550],
        ["Бильярдная роза", "mpvinewood_overlays", "MP_Vinewood_Tat_027_M", "MP_Vinewood_Tat_027_F", "ZONE_LEFT_LEG", 16800, 551],
        ["Serpent of Death", "mpluxe_overlays", "MP_LUXE_TAT_000_M", "MP_LUXE_TAT_000_F", "ZONE_LEFT_LEG", 13600, 552],
        ["Cross of Roses", "mpluxe2_overlays", "MP_LUXE_TAT_011_M", "MP_LUXE_TAT_011_F", "ZONE_LEFT_LEG", 15500, 553],
        ["Dagger Devil", "mpstunt_overlays", "MP_MP_Stunt_tat_007_M", "MP_MP_Stunt_tat_007_F", "ZONE_LEFT_LEG", 13500, 554],
        ["Dirt Track Hero", "mpstunt_overlays", "MP_MP_Stunt_tat_013_M", "MP_MP_Stunt_tat_013_F", "ZONE_LEFT_LEG", 14300, 555],

        /* №4 Левая нога [556 - 566] */
        ["Golden Cobra", "mpstunt_overlays", "MP_MP_Stunt_tat_021_M", "MP_MP_Stunt_tat_021_F", "ZONE_LEFT_LEG", 14300, 556],
        ["Quad Goblin", "mpstunt_overlays", "MP_MP_Stunt_tat_028_M", "MP_MP_Stunt_tat_028_F", "ZONE_LEFT_LEG", 12400, 557],
        ["Stunt Jesus", "mpstunt_overlays", "MP_MP_Stunt_tat_031_M", "MP_MP_Stunt_tat_031_F", "ZONE_LEFT_LEG", 13500, 558],
        ["Dragon and Dagger", "multiplayer_overlays", "FM_Tat_Award_M_009", "FM_Tat_Award_F_009", "ZONE_LEFT_LEG", 13400, 559],
        ["Melting Skull", "multiplayer_overlays", "FM_Tat_M_002", "FM_Tat_F_002", "ZONE_LEFT_LEG", 13600, 560],
        ["Dragon Mural", "multiplayer_overlays", "FM_Tat_M_008", "FM_Tat_F_008", "ZONE_LEFT_LEG", 13000, 561],
        ["Hottie", "multiplayer_overlays", "FM_Tat_M_023", "FM_Tat_F_023", "ZONE_LEFT_LEG", 13500, 562],
        ["Smoking Dagger", "multiplayer_overlays", "FM_Tat_M_026", "FM_Tat_F_026", "ZONE_LEFT_LEG", 14500, 563],
        ["Faith", "multiplayer_overlays", "FM_Tat_M_032", "FM_Tat_F_032", "ZONE_LEFT_LEG", 16100, 564],
        ["Chinese Dragon", "multiplayer_overlays", "FM_Tat_M_033", "FM_Tat_F_033", "ZONE_LEFT_LEG", 13600, 565],
        ["Grim Reaper", "multiplayer_overlays", "FM_Tat_M_037", "FM_Tat_F_037", "ZONE_LEFT_LEG", 13160, 566]
    ]
}