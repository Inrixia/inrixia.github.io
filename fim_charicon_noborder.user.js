// ==UserScript==
// @name         Fim Charicon NoBorder
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  Time to take over all the icons!
// @author       YourTrueOverlord
// @match        http://tampermonkey.net/index.php?version=4.4&ext=dhdg&updated=true
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @include http://www.fimfiction.net/*
// @include https://www.fimfiction.net/*
// ==/UserScript==


(function() {
    var iconArray = {
        "Twilight Sparkle":"twilight_sparkle.png",
        "Rainbow Dash":"rainbow_dash.png",
        "Pinkie Pie":"pinkie_pie.png",
        "Applejack":"applejack.png",
        "Rarity":"rarity.png",
        "Fluttershy":"fluttershy.png",
        "Spike":"spike.png",
        "Main 6":"main_6.png",
        "Apple Bloom":"apple_bloom.png",
        "Scootaloo":"scootaloo.png",
        "Sweetie Belle":"sweetie_belle.png",
        "Cutie Mark Crusaders":"cmc.png",
        "Babs Seed":"babs_seed.png",
        "Princess Celestia":"celestia.png",
        "Princess Luna":"princess_luna.png",
        "Nightmare Moon":"nightmare_moon.png",
        "Princess Cadance":"cadance.png",
        "Flurry Heart":"flurry-heart.png",
        "Gilda":"gilda.png",
        "Zecora":"zecora.png",
        "Trixie":"trixie.png",
        "Cheerilee":"cherilee.png",
        "The Mayor":"the_mayor.png",
        "Hoity Toity":"hoity_toity.png",
        "Photo Finish":"photo_finish.png",
        "Sapphire Shores":"sapphire_shores.png",
        "Spitfire":"spitfire.png",
        "Soarin":"soarin.png",
        "Prince Blueblood":"prince_blueblood.png",
        "Little Strongheart":"little_strongheart.png",
        "Discord":"discord.png",
        "Mare Do Well":"mare_do_well.png",
        "Fancypants":"fancypants.png",
        "Daring Do":"daring_do.png",
        "Flim and Flam":"flimflam.png",
        "Cranky Doodle Donkey":"cranky_doodle.png",
        "Matilda":"matilda.png",
        "Mr. Cake":"mr_cake.png",
        "Mrs. Cake":"mrs_cake.png",
        "Iron Will":"ironwill.png",
        "Shining Armor":"shining_armor.png",
        "Wonderbolts":"wonderbolts.png",
        "Diamond Dogs":"diamond_dogs.png",
        "Queen Chrysalis":"queen_chrysalis.png",
        "King Sombra":"king_sombra.png",
        "Crystal Ponies":"crystal_ponies.png",
        "Lightning Dust":"lightning_dust.png",
        "Sunset Shimmer":"sunset_shimmer.png",
        "Pie Sisters":"pie_sisters.png",
        "Cherry Jubilee":"cherry_jubilee.png",
        "Cake Twins":"cake_twins.png",
        "Flash Sentry":"flash_sentry.png",
        "Mane-iac":"mane-iac.png",
        "Power Ponies":"power_ponies.png",
        "Cheese Sandwich":"cheesesandwich.png",
        "Maud Pie":"maud-pie.png",
        "Coco Pommel":"coco-pommel.png",
        "Trenderhoof":"trenderhoof.png",
        "Breezies":"breezies.png",
        "Suri Polomare":"suri-polomare.png",
        "Ahuizotl":"ahuizotl.png",
        "Seabreeze":"seabreeze.png",
        "Fleetfoot":"fleetfoot.png",
        "Bulk Biceps":"bulk-biceps.png",
        "Tirek":"tirek.png",
        "Adagio Dazzle":"adagio-dazzle.png",
        "Sonata Dusk":"sonata-dusk.png",
        "Aria Blaze":"aria-blaze.png",
        "Ms. Harshwhinny":"harshwhinny%20head.png",
        "Starlight Glimmer":"starlight-glimmer.png",
        "Ember":"ember.png",
        "Limestone Pie":"limestone-pie.png",
        "Marble Pie":"marble-pie.png",
        "Moondancer":"moondancer.png",
        "Moonlight Raven":"moonlight-raven.png",
        "Sassy Saddles":"sassy-saddles.png",
        "Treehugger":"treehugger.png",
        "Troubleshoes":"trouble-shoes.png",
        "Wind Rider":"wind-rider.png",
        "Steven Magnet":"steven-magnet.png",
        "Tantabus":"tantabus.png",
        "The Smooze":"the-smooze.png",
        "Zephyr Breeze":"zephyr-breeze.png",
        "Vapor Trail":"vapor-trail.png",
        "Sky Stinger":"sky-stinger.png",
        "Saffron Masala":"saffron-masala.png",
        "Coriander Cumin":"coriander-cumin.png",
        "Sunburst":"sunburst.png",
        "Mr. Stripes":"mr-stripes.png",
        "Plaid Stripes":"plaid-stripes.png",
        "Thorax":"thorax.png",
        "Yaks":"yaks.png",
        "Bat Pony":"bat-pony.png",
        "Griffons":"griffons.png",
        "Minotaur":"minotaur.png",
        "Royal Guard":"royal-guard.png",
        "Zebra":"zebra.png",
        "Dragons":"dragons.png",
        "Twinkleshine":"twinkle-shine.png",
        "Coloratura":"coloratura.png",
        "Gabby":"gabby.png",
        "Spoiled Rich":"spoiled-rich.png",
        "Sunshine Smiles":"sunshine-smiles.png",
        "Tender Taps":"tender-taps.png",
        "Quibble Pants":"quibble-pants.png",
        "Garble":"garble.png",
        "Double Diamond":"double-diamond.png",
        "Night Glider":"night-glider.png",
        "Sugar Belle":"sugar-belle.png",
        "Party Favor":"party-favor.png",
        "Timberwolves":"timberwolves.png",
        "Svengallop":"svengallop.png",
        "Big Macintosh":"big_mac.png",
        "Granny Smith":"granny_smith.png",
        "Braeburn":"braeburn.png",
        "Diamond Tiara":"diamond_tiara.png",
        "Silver Spoon":"silver_spoon.png",
        "Twist":"twist.png",
        "Snips":"snips.png",
        "Snails":"snails.png",
        "Pipsqueak":"pipsqueak.png",
        "Featherweight":"featherweight.png",
        "Zipporwhill":"zipporwhill.png",
        "Ruby Pinch":"ruby-pinch.png",
        "Angel":"angel.png",
        "Winona":"winona.png",
        "Opalescence":"opalescence.png",
        "Gummy":"gummy.png",
        "Owlowiscious":"owlowiscious.png",
        "Philomena":"philomena.png",
        "Tank":"tank.png",
        "Pets":"pets.png",
        "Derpy Hooves":"derpy_hooves.png",
        "Lyra":"lyra.png",
        "Bon-Bon":"bon_bon.png",
        "DJ P0N-3":"dj_pon3.png",
        "Caramel":"caramel.png",
        "Doctor Whooves":"doctor_whooves.png",
        "Octavia":"octavia.png",
        "Berry Punch":"berry_punch.png",
        "Carrot Top":"carrot_top.png",
        "Fleur de Lis":"fleur_de_lis.png",
        "Colgate":"colgate.png",
        "Dinky Hooves":"dinky.png",
        "Thunderlane":"thunderlane.png",
        "Flitter and Cloudchaser":"flitter_and_cloudchaser.png",
        "Rumble":"rumble.png",
        "Roseluck":"roseluck.png",
        "Changelings":"changelings.png",
        "Noteworthy":"noteworthy.png",
        "Nurse Redheart":"nurse_red_heart.png",
        "Flower Ponies":"flower_ponies.png",
        "Raindrops":"raindrops.png",
        "Spa Ponies":"spa_ponies.png",
        "Sparkler":"sparkler.png",
        "Cloudkicker":"cloudkicker.png",
        "Twilight Velvet":"twily%20mommy%20head.png",
        "Night Light":"twily%20daddy%20head.png",
        "Screwball":"screwball%20head.png",
        "Blossomforth":"blossomforth.png",
        "Button Mash":"button-mash.png",
        "Cloudchaser":"cloud-chaser.png",
        "Daisy":"daisy.png",
        "Filthy Rich":"filthy-rich.png",
        "Flitter":"flitter.png",
        "Lily":"lily.png",
        "Parcel Post":"parcel-post.png",
        "Pony Joe":"pony-joe.png",
        "White Lightning":"white-lightning.png",
        "Original Character":"oc.png",
        "Other":"other.png",
        "Anon":"anon.png",
        "Self Insert":"self-insert.png",
        "Dazzlings":"the-dazzlings.png",
        "Applejack (EqG)":"applejack-eg.png",
        "Dean Cadence":"dean-cadance.png",
        "Indigo Zap":"indigo-zap.png",
        "Lemon Zest":"lemon-zest.png",
        "Micro Chips":"micro-chips.png",
        "Midnight Sparkle":"midnight-sparkle.png",
        "Pinkie Pie (EqG)":"pinkie-pie-eg.png",
        "Principal Cinch":"principal-cinch.png",
        "Rainbow Dash (EqG)":"rainbow-dash-eg.png",
        "Principal Celestia":"principal-celestia.png",
        "Rarity (EqG)":"rarity-eg.png",
        "Sandalwood":"sandalwood.png",
        "Sour Sweet":"sour-sweet.png",
        "Spike (EqG)":"spike-eg.png",
        "Sugarcoat":"sugarcoat.png",
        "Sunny Flare":"sunny-flare.png",
        "Sunset Shimmer (Demon)":"sunset-shimmer-demon.png",
        "Twilight Sparkle (EqG)":"twilight-sparkle-eg.png",
        "Vice-Principal Luna":"vice-principal-luna.png",
        "Fluttershy (EqG)":"fluttershy-eg.png",
        "Main 7 (EqG)":"main-7-eg.png",
        "Shadowbolts (EqG)":"shadowbolts-eg.png",
        "Timber Spruce":"timber-spruce.png",
        "Gloriosa Daisy":"gloriosa-daisy.png",
        "Chancellor Puddinghead":"chancellor-puddinghead.png",
        "Clover the Clever":"clover-the-clever.png",
        "Commander Hurricane":"commander-hurricane.png",
        "Princess Platinum":"princess-platinum.png",
        "Private Pansy":"private-pansy.png",
        "Smart Cookie":"smart-cookie.png",
        "Starswirl the Bearded":"starswirl-the-bearded.png",
        "Nightmare Rarity":"nightmare-rarity.png",
        "Tiberius":"tiberius.png",
        "Princess Amore":"princess-amore.png",
        "Radiant Hope":"radiant-hope.png"
    };
    $('.padding .story-tags').find('a').each(function() {
        var tag = $(this).text();
        $(this).css({
            'vertical-align':'middle',
            'line-height':'1.9em',
            'padding-top':'0.13em',
            'border':'none'
        });
        if (iconArray[tag] !== undefined){
            $(this).text('');
            $(this).css({
                'padding':'0em',
                'vertical-align':'middle',
                'padding-bottom':'0.2em',
                'background':'transparent'
            });
            $(this).append('<img src="https://static.fimfiction.net/images/characters/'+iconArray[tag]+'" alt="" style="vertical-align:middle;border-radius: 0.3em;"/>');
        }
    });
})();
