import {QuestDialog} from "./quests";
import { HOSPITAL_TELEPORT_DIMENSION } from "./teleport.system";

export interface StaticNpcItem {
    x: number;
    y: number;
    z: number;
    h: number;
    d?: number;
    name: string;
    model: string;
    anim: string | [string, string];
    dialog?: QuestDialog;
    role?:string;
}



const autoschool: QuestDialog = ['Привет! Я учитель в нашей автошколе, у меня ты можешь ознакомится с правилами штата ONYX выбрав нужный тебе раздел, после чего пройдите к Lui и сдай экзамен, удачи!', {
    answers: ['Порядок дорожного движения', 'Общие правила', 'Начало движения, маневрирование', 'Сигналы светофора и регулировщика', 'Правила обгона', 'Дорожная разметка', 'Пользование внешними световыми приборами и звуковыми сигналами'],
    onAnswer: (index) => {

        if (index === 0) {
            return ['Движение транспортных средств является правосторонним. Все участники дорожного движения, организаторы дорожного движения и другие лица должны соблюдать требования правовых актов по дорожному движению, быть внимательными и осмотрительными в дорожном движении и обеспечивать ритмичность движения с целью предотвращения возникновения опасности и причинения вреда.',
                {
                    answers: ['Понятно спасибо!'], onAnswer: () => autoschool

                }]
        }
        if (index === 1) {
            return ['Пройти обучение навыкам вождения на автомобиле или мотоцикле можно только начиная с 16 лет. Перед началом движения, перестроением, поворотом (разворотом) и остановкой водитель обязан подавать сигналы световыми указателями поворота соответствующего направленияПри приближении транспортного средства с включенными проблесковым маячком синего цвета и специальным звуковым сигналом водители обязаны уступить дорогу для обеспечения беспрепятственного проезда указанного транспортного средства. При съезде автомобиля правыми колесами на неукрепленную и влажную обочину возникает опасность заноса из-за разницы сцепления правых и левых колес с дорогой. При этом целесообразно, не меняя скорости, т.е. не прибегая к торможению, плавным поворотом рулевого колеса вернуть автомобиль на проезжую часть. Торможение в данной ситуации может вызвать занос автомобиля. ',
                {
                    answers: ['Понятно спасибо!'], onAnswer: () => autoschool

                }]

        }
        if (index === 2) {
            return ['Перед началом движения, перестроением, поворотом (разворотом) и остановкой водитель обязан подавать сигналы световыми указателями поворота соответствующего направления.При перестроении водитель должен уступить дорогу транспортным средствам, движущимся попутно без изменения направления движения. При одновременном перестроении транспортных средств, движущихся попутно, водитель должен уступить дорогу транспортному средству, находящемуся справаПри выезде на дорогу с прилегающей территории водитель должен уступить дорогу транспортным средствам и пешеходам, движущимся по ней, а при съезде с дороги - пешеходам и велосипедистам, путь движения которых он пересекает',
                {
                    answers: ['Понятно спасибо!'], onAnswer: () => autoschool

                }]
        }
        if (index === 3) {
            return ['Круглые сигналы светофора имеют следующие значения: ЗЕЛЕНЫЙ СИГНАЛ разрешает движение; ЗЕЛЕНЫЙ МИГАЮЩИЙ СИГНАЛ  разрешает движение и информирует вас о том, что в скоре будет включен запрещающий сигнал. ЖЕЛТЫЙ МИГАЮЩИЙ СИГНАЛ разрешает движение и информирует о наличии нерегулируемого перекрестка или пешеходного перехода, предупреждает об опасности; КРАСНЫЙ СИГНАЛ, в том числе мигающий, запрещает движение. ',
                {
                    answers: ['Понятно спасибо!'], onAnswer: () => autoschool

                }]
        }
        if (index === 4) {
            return ['Перед началом обгона водитель должен убедиться в том, что:водитель транспортного средства, которое двигается впереди по той самой полосе, не подал сигнал о намерении поворота (перестроение) налево;полоса , предназначенная для встречного движения, свободна на достаточно для обгона расстоянии;ваше транспортное средство никто не обгоняет. водителю обгоняемого транспортного средства запрещается препятствовать обгону путем повышения скорости движения или иными действиями.',
                {
                    answers: ['Понятно спасибо!'], onAnswer: () => autoschool

                }]
        }
        if (index === 5) {
            return ['Белые и желтые линии - Могут быть сплошными и прерывистыми, одиночными и двойными. Они используются для отделения полос и разделения движения потоков транспортных средств.Желтые линии - отделяют полосы движения транспортных средств движущихся в противоположном направлении. Так-же одиночная желтая линия может отделять правую кромку обочины на шоссе. Белые линии - отделяют полосы движения транспортных средств движущихся в одном направлении. Так-же одиночная желтая линия может отделять правую кромку обочины на шоссе. Прерывистая одиночная желтая линия - Следует держаться правее от линии, за исключением случая когда вы обгоняете впереди идущее Т/С. Вы можете пересекать прерывистую желтую линию только для безопасного обгона впереди идущих транспортных средств, и в случаях пересечения перекрестка если это обусловлено дорожной разметкой .Прерывисто-сплошная двойная желтая линия - Сплошная желтая линия справа от прерывистой желтой линии означает что по встречной полосе на этом участке обгон запрещен (за исключением безопасного поворота налево на перекрестках, проезда прямо на перекрестках если это обусловлено дорожной разметкой в виде стрелки направления движения вашей полосы “движение только прямо”). Если прерывистая желтая линия находится справа от сплошной желтой линии вы можете совершить обгон впереди идущего Т/С и занять свою полосу (даже пересекая сплошную желтую линию).Двойная желтая линия - Обгон на этом участке дороге запрещен. Пересекать двойную желтую линию запрещено за исключением безопасного пересечения перекрестков если это обусловлено соответствующей дорожной разметкой .Прерывистая белая линия - Используется для разделения полос движения в одном направлении.Пересекать прерывистую белую линию разрешено если этот маневр будет безопасным.',
                {
                    answers: ['Понятно спасибо!'], onAnswer: () => autoschool

                }]
        }
        if (index === 6) {
            return ['В темное время суток и в условиях недостаточной видимости независимо от освещения дороги, а также в тоннелях на движущемся транспортном средстве должны быть включены следующие световые приборы:на всех механических транспортных средствах - фары дальнего или ближнего света, на велосипедах - фары или фонари, на гужевых повозках - фонари (при их наличии);- Дальний свет должен быть переключен на ближний:в населенных пунктах, если дорога освещена; при встречном разъезде на расстоянии не менее чем за 150 м до транспортного средства, а также и при большем, если водитель встречного транспортного средства периодическим переключением света фар покажет необходимость этого; в любых других случаях для исключения возможности ослепления водителей как встречных, так и попутных транспортных средств.',
                {
                    answers: ['Понятно спасибо!'], onAnswer: () => autoschool

                }]
        }
    }
}];

const lcnmaff: QuestDialog = ["Привет, давай я тебе раскажу чем ты можешь заниматься работая на Винодельном предприятии:", {
    answers: ["Сбор винограда", "Отжим винограда", "Перегонка в  вино", "Продажа готовых бутылок с вином"],
    onAnswer: (index) => {

        if (index === 0) {
            return ["Плонтация винограда помечена меткой на карте, за каждый собраный куст вы будете получать 1 плод винограда.",
                {
                    answers: ["Понятно спасибо"], onAnswer: () => lcnmaff
                }]
        }
        if (index === 1) {
            return ["После того как вы собрали достаточно плодов вам нужно поехать и отжать виноград в специальном ангаре его вы можете найти на карте недалеко от палето бей",
                {
                    answers: ["Понятно спасибо"], onAnswer: () => lcnmaff
                }]
        }
        if (index === 2) {
            return ["Как только вы получили виноградный сок поcле отжима вам нужно перегнать его в вино, перегоный апарат так же нахоидтся рядом с ангаром где вы получали виноградный сок",
                {
                    answers: ["Понятно спасибо"], onAnswer: () => lcnmaff
                }]
        }
        if (index === 3) {
            return ["Как только после перегонки вы получили бутылки с вином вы можете продать их одному из 3 торговцев, этих торговцев вы может найти по карте они обозначены фиолетовым человеком. У каждого торговца цена меняется каждый час так что если вы хотите по выгоднее продать свою продукцию вам предётся покататься. После продажи часть суммы уйдёт в сейф вашего предприятия часть вам на руки.",
                {
                    answers: ["Понятно спасибо"], onAnswer: () => lcnmaff
                }]

        }
    }
}];

const rmmaff: QuestDialog = ["Привет, давай я тебе раскажу чем ты можешь работая на Гольф клуб:", {
    answers: ["Сбор листвы", "Переработка листвы в биотопливо", "Продажа биотоплива",],
    onAnswer: (index) => {

        if (index === 0) {
            return ["По всей территории гольф клуба есть места где нужно собирать листву",
                {
                    answers: ["Понятно спасибо"], onAnswer: () => rmmaff
                }]
        }
        if (index === 1) {
            return ["После того как вы собрали достаточно количество листвы вы можете отвезти её на переработку, что бы получить из неё биотопливо. Завод по переработки находится рядом с Сенди-Шорс, на карте он отмечен как зелёная канистра",
                {
                    answers: ["Понятно спасибо"], onAnswer: () => rmmaff
                }]
        }
        if (index === 2) {
            return ["Как только вы получили переработали листву в биотопливо, вы можете продать их одному из 3 торговцев, этих торговцев вы может найти по карте они обозначены фиолетовым челочеком. У каждого торговца цена меняется каждый час так что если вы хотите выгоднее продать свою продукцию вам предётся покататься. После продажи часть суммы уйдёт в сейф вашего предприятия часть вам на руки.",
                {
                    answers: ["Понятно спасибо"], onAnswer: () => rmmaff
                }]
        }
    }
}];

const carfamali: QuestDialog = ["Приехал поработать на карьере, тебе чем нибудь помочь?", {
    answers: ["Сбор породы", "Продажа породы"],
    onAnswer: (index) => {

        if (index === 0) {
            return ["На территории карьера есть места где ты можешь собирать породу, всего 3 вида породы каменная, серебряная и золотая.",
                {
                    answers: ["Понятно спасибо"], onAnswer: () => carfamali
                }]
        }
        if (index === 1) {
            return ["Поcле того как вы добыли породу вы моежет поехать и её продать скупщикам. Есть два скупщика один находится на стройке в Палето, другой на въезде в порт, у каждого скупщика разная цена и меняется она каждый час. Каменная порода самая дешёвая, серебряная и золотая дороже, но шанс их получить гораздо меньше",
                {
                    answers: ["Понятно спасибо"], onAnswer: () => carfamali
                }]
        }
    }
}];






export const STATIC_NPC_DATA: StaticNpcItem[] = [
    // bomj spawn
    { x: 666.79, y: -612.33, z: 18.35, h: 256, name: '', model: "a_m_o_acult_02", anim: ['amb@code_human_cower_stand@female@base', 'base'] }, 
    { x: 666.98, y: -616.87, z: 18.33, h: 359, name: '', model: "a_m_m_afriamer_01", anim: ['amb@world_human_stand_guard@male@base', 'base'] }, 
    { x: 671.68, y: -612.67, z: 18.72, h: 276, name: '', model: "a_m_o_beach_01", anim: ['', 'base'] }, 
    { x: 673.47, y: -612.71, z: 18.85, h: 88, name: '', model: "u_m_m_bikehire_01", anim: ['', 'base'] }, 
    { x: 685.41, y: -617.53, z: 19.65, h: 66, name: '', model: "a_c_cat_01", anim: ['', 'base'] }, 
    { x: 684.74, y: -616.40, z: 19.62, h: 187, name: '', model: "a_m_m_indian_01", anim: ['', 'base'] }, 
    { x: 692.42, y: -617.80, z: 20.12, h: 256, name: '', model: "a_m_m_eastsa_01", anim: ['', 'base'] }, 
    { x: 695.50, y: -613.33, z: 20.54, h: 119, name: '', model: "a_c_chop", anim: ['', 'base'] }, 
    { x: 700.95, y: -617.31, z: 18.84, h: 4, name: '', model: "a_c_husky", anim: ['', 'base'] }, 
    // ghetto spawn
    { x: 20.14, y: -1300.51, z: 28.28, h: 205, name: '', model: "a_c_pug", anim: ['', 'base'] },
    { x: 21.17, y: -1300.66, z: 29.19, h: 125, name: '', model: "ig_car3guy2", anim: ['', 'base'] },
    { x: 8.21, y: -1300.84, z: 29.17, h: 85, name: '', model: "s_m_m_dockwork_01", anim: ['', 'base'] },
    { x: 7.12, y: -1300.73, z: 29.18, h: 269, name: '', model: "s_m_y_dockwork_01", anim: ['', 'base'] },
    { x: 21.01, y: -1312.66, z: 29.46, h: 15, name: '', model: "g_m_y_famfor_01", anim: ['', 'base'] },
    { x: 22.04, y: -1311.54, z: 29.26, h: 145, name: '', model: "ig_g", anim: ['', 'base'] },
    // police spawn
    { x: -1057.31, y: -868.33, z: 5.11, h: 38, name: '', model: "s_m_m_prisguard_01", anim: ['', 'base'] },
    { x: -1068.41, y: -853.05, z: 4.87, h: 73, name: '', model: "s_f_y_cop_01", anim: ['', 'base'] }, 
    { x: -1070.17, y: -853.82, z: 4.87, h: 330, name: '', model: "s_m_y_cop_01", anim: ['', 'base'] },
    { x: -1070.16, y: -851.97, z: 4.87, h: 220, name: '', model: "csb_cop", anim: ['', 'base'] },
    { x: -1068.14, y: -867.05, z: 4.87, h: 292, name: '', model: "s_m_y_hwaycop_01", anim: ['', 'base'] },
    { x: -1067.71, y: -870.55, z: 4.92, h: 311, name: '', model: "s_m_y_ranger_01", anim: ['', 'base'] },
    { x: -1047.52, y: -862.04, z: 4.92, h: 42, name: '', model: "s_f_y_ranger_01", anim: ['', 'base'] }, 
    { x: -1067.31, y: -873.89, z: 4.36, h: 273, name: '', model: "a_c_husky", anim: ['', 'base'] },
    // Аренды на начальных работах
    { x: -516.26, y: -1013.09, z: 23.45, h: 24, name: '', model: "cs_andreas", anim: ['', 'base'] },
    { x: 2138.34, y: 4923.52, z: 41.04, h: 344, name: '', model: "cs_andreas", anim: ['', 'base'] },
    { x: -1047.80, y: -874.36, z: 5.64, h: 168, name: '', model: "cs_andreas", anim: ['', 'base'] },

    // Донат автосалон
    // { x: -796.91, y: -204.71, z: 37.25, h: 115, name: 'Наташа', model: "a_f_m_beach_01", anim: ["mini@strip_club@private_dance@part1", "priv_dance_p1"] },
    // { x: -799.12, y: -200.91, z: 37.25, h: 121, name: 'Таня', model: "s_f_y_stripper_01", anim: ["mini@strip_club@private_dance@part1", "priv_dance_p1"] },
    // Начальная работа сад
    { x: 2413.03, y: 4997.99, z: 46.63, h: 126, name: '', model: "u_m_y_mani", anim: ['', 'base'] },
    // Стройка
    { x: -510.16, y: -1002.96, z: 23.55, h: 53, name: '', model: "s_m_m_gardener_01", anim: ['', 'base'] },
    // Клининг служба
    {x: -1534.90, y: -453.81, z: 35.92, h: 317, name: '', model: "s_m_m_migrant_01", anim: ['', 'base']},
    // Гараж Тони
    {x: 1966.27, y: 5185.21, z: 47.88, h: 186, name: '', model: "ig_omega", anim: ['', 'base']},
    // EMS Быстрая выписка
    {x: 319.20, y: -574.70, z: 86.93, h: 295, name: 'Mishelka', model: "s_f_y_scrubs_01", anim: ['', 'base']},
    {x: -251.92, y: 6335.87, z: 32.43, h: 172, name: 'Doctor', model: "s_m_m_scientist_01", anim: ['', 'base']},
    // Автошкола теория

    {
        x: -710.88,
        y: -1305.34,
        z: 5.11,
        h: 2,
        name: 'Учитель ПДД',
        model: "u_m_m_bankman",
        anim: ['', 'base'],
        dialog: autoschool
    },

    //Информации о заданиях у мафий
    {
        x: -1882.41, 
        y: 2050.37, 
        z: 140.99,
        h: 345,
        name: "Информатор",
        model: "cs_carbuyer",
        anim: ['', 'base'],
        dialog: lcnmaff

    },
    {
        x: -1346.94, 
        y: 53.83, 
        z: 55.25, 
        h: 84,
        name: "Информатор",
        model: "cs_carbuyer",
        anim: ['', 'base'],
        dialog: rmmaff

    },
    // Информационный в карьере
    {
        x: 2952.68, 
        y: 2743.51, 
        z: 43.51, 
        h: 234,
        name: "Работник карьера",
        model: "mp_m_weed_01",
        anim: ['', 'base'],
        dialog: carfamali

    },


    // Лицензии на транспорт
    {x: -777.06, y: -1323.23, z: 5.15, h: 145, name: 'Anna', model: "s_f_y_shop_mid", anim: ['', 'base']},
    {x: -1154.45, y: -2716.10, z: 19.89, h: 323, name: 'Yukiteru', model: "ig_stevehains", anim: ['', 'base']},
    {x: 1697.49, y: 3594.95, z: 35.62, h: 10, name: 'Roman', model: "u_m_o_taphillbilly", anim: ['', 'base']},
    // Лиц на оружие
    {x: 440.96, y: -974.44, z: 30.69, h: 209, name: 'Lina', model: "s_f_y_cop_01", anim: "WORLD_HUMAN_STAND_IMPATIENT_UPRIGHT"},
    // Лиц на ТС
    {x: -699.28, y: -1311.65, z: 5.11, h: 47, name: 'Venskiy', model: "ig_bestmen", anim: ['', 'base']},
    // Лицензии правительство
    {x: -537.79, y: -195.99, z: 38.23, h: 120, name: 'Ruslan', model: "s_m_y_barman_01", anim: ['', 'base']},
    // Лицензии ПД
    {x: 450.23, y: -973.09, z: 30.69, h: 172, name: 'Elena', model: "cs_debra", anim: ['', 'base']},
    // Лицензии болька город
    {x: 327.50, y: -598.18, z: 28.79, h: 42, name: 'Omar', model: "s_m_m_doctor_01", anim: ['', 'base']},
    // ШД сенди
    {x: 1858.53, y: 3698.14, z: 34.27, h: 117, name: 'Daniel', model: "s_m_y_sheriff_01", anim: ['', 'base']},
    // ШД палето
    {x: -441.43, y: 6006.87, z: 31.72, h: 101, name: 'Yuno', model: "s_f_y_sheriff_01", anim: ['', 'base']},
    // Лицензия старая болька 1
    {x: 230.78, y: -1366.30, z: 39.53, h: 272, name: 'Eva', model: "a_f_y_femaleagent", anim: ['', 'base']},
     // Лицензия старая болька 1
     // {x: 259.63, y: -1359.69, z: 24.54, h: 318, name: 'Artem', model: "s_m_m_doctor_01", anim: ['', 'base']},
     // Центр регистрации брака в Сенди
     {x: -328.12, y: 2798.04, z: 60.18, h: 289, name: '', model: "cs_priest", anim: ['', 'base']},
     // Армия
     {x: -2353.79, y: 3264.34, z: 32.81, h: 234, name: '', model: "s_m_y_armymech_01", anim: ['', 'base']},
     // Casino
     {x: 1088.05, y: 221.42, z: -49.20, h: 180, name: 'Natasha', model: "a_f_y_femaleagent", anim: "WORLD_HUMAN_STAND_IMPATIENT_UPRIGHT", d: 1},
    // Больница, хирург
    {x: 300.02, y: -599.00, z: 43.26, h: 6, name: 'Хирург', model: "s_m_m_doctor_01", anim: 'WORLD_HUMAN_CLIPBOARD_FACILITY'},
    // Удостоверение фиб
    {x: 2509.17, y: -444.64, z: 106.91, h: 323, name: 'Midas', model: "cs_barry", anim: 'WORLD_HUMAN_CLIPBOARD_FACILITY'},
    // Центр регистрации брака в лос сантосе
    {x: -1669.04, y: -293.02, z: 52.62, h: 20, name: '', model: "cs_priest", anim: ['', 'base']},
    // Обследование ЕМС палето
    {x: -253.63, y: 6314.59, z: 32.43, h: 296, name: 'Хирург', model: "s_m_m_doctor_01", anim: ['', 'base']},
    // Приемная больница в LS
    {x: 349.14, y: -587.48, z: 28.80, h: 247, name: 'Doctor', model: "s_m_m_doctor_01", anim: ['', 'base']},
    // WZ
    {x: -586.46, y: -921.22, z: 23.87, h: 133, name: 'Fedot', model: "cs_barry", anim: ['', 'base']},
    // Vito Andallini (Создание крайм семьи)
    {x: -799.55, y: 171.47, z: 72.30, h: 82, name: 'Vito Andolini', model: "cs_movpremmale", anim: "WORLD_HUMAN_SEAT_WALL"},
    // НПС на создании крайм семьи
    {x: -801.10, y: 169.04, z: 72.83, h: 13, name: '', model: "g_m_m_mexboss_01", anim: "WORLD_HUMAN_AA_SMOKE"},
    {x: -803.53, y: 178.50, z: 72.33, h: 173, name: '', model: "s_m_m_highsec_01", anim: "WORLD_HUMAN_SEAT_WALL"},
    {x: -800.18, y: 183.01, z: 72.61, h: 194, name: '', model: "s_f_m_maid_01", anim: ['amb@world_human_maid_clean@', 'base']},
    {x: -814.88, y: 177.71, z: 72.15, h: 20, name: '', model: "s_m_m_fiboffice_02", anim: ""},
    {x: -815.95, y: 180.50, z: 72.15, h: 201, name: '', model: "u_m_m_jewelsec_01", anim: ""},
    {x: -805.3, y: 178.75, z: 72.33, h: 198, name: '', model: "cs_martinmadrazo", anim: "WORLD_HUMAN_SEAT_WALL"},
    // Приемная больница в Sandy Shors
    {x: 1829.22, y: 3682.36, z: 34.27, h: 249, name: 'Doctor', model: "s_m_m_doctor_01", anim: ['', 'base']},
    // Лицензия палето
    {x: 1830.10, y: 3673.16, z: 34.27, h: 294, name: 'Doctor', model: "s_m_m_doctor_01", anim: ['', 'base']},
    //Лицензии палето
    {x: -250.25, y: 6311.43, z: 32.43, h: 3, name: 'Doctor', model: "s_m_m_doctor_01", anim: ['', 'base']},
    // License city hospital
    {x: 304.24, y: -571.24, z: 86.93, h: 250, name: 'Doctor', model: "s_m_m_doctor_01", anim: ['', 'base']},
    // Рефери на бойковском клубе
    {x: 599.14, y: -435.99, z: 24.74, h: 267, name: 'Рефери', model: "u_m_m_edtoh", anim: ['', 'base']}

];