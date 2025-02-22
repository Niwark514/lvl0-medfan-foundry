export default [
    {
        id: 'preserveDead',
        name: 'Conservation du cadavre',
        icon: 'icons/magic/life/cross-embers-glow-yellow-purple.webp',
        description: {
            formula: `return "Ce sort a deux effets."
                        + "<ul>"
                        + "<li>Le champion préserve le cadavre ciblé afin qu’il ne se décompose pas, pendant " + ((context.criticalSuccess ? 2 : 1) * context.actorData.computedData.magic.arcaneLevel * 3) + " jours. Ce sort prolonge le temps pour ressusciter la créature touchée d’entre les morts. Le sort fonctionne sur les parties du corps coupées et autres.</li>"
                        + "<li>Le sort empêche le cadavre ciblé d’être animé par un sort d’animation des morts.</li>"
                        + "</ul>Le sort se termine lorsque le cadavre est ressuscité des morts ou arrive au bout de sa durée."`
        },
        distance: {
            value: 1,
            unit: 'm'
        },
        duration: {
            formula: `return (context.criticalSuccess ? 2 : 1) * context.actorData.computedData.magic.arcaneLevel * 3`,
            unit: 'jours'
        },
        area: {
            text: 'Une cible'
        },
        criticalSuccess: {
            formula: `
                        if (context.criticalSuccess)
                            return 'Double la durée (pré-calculé)';
                        return 'Double la durée';`
        },
    },
    {
        id: 'detectLies',
        name: 'Détection des mensonges',
        icon: 'icons/creatures/abilities/mouth-teeth-crooked-blue.webp',
        description: 'À chaque tour, le champion peut se concentrer sur un sujet à portée et saura instantanément si le sujet ment délibérément.<br>Le sort ne révèle pas la vérité, ne découvre pas les inexactitudes involontaires, ni ne révèle Les évasions. À chaque tour, le personnage peut se concentrer sur un sujet différent.',
        distance: {
            value: 5,
            unit: 'm'
        },
        duration: {
            text: `une scène`
        },
        area: {
            text: 'Une cible'
        },
        criticalSuccess: {
            text: 'Permet de savoir si la cible, sans vraiment mentir, évite de réellement répondre à la question'
        }
    },
    {
        id: 'healBlindness',
        name: 'Guérison de l’aveuglement',
        icon: 'icons/creatures/eyes/slime-single-red.webp',
        description: `Ce sort guérit la cécité, qu'elle soit d'origine naturelle ou magique chez une cible. Le sort ne restaure pas les yeux perdus, mais il les répare s'ils sont endommagés.`,
        distance: {
            type: 'touch'
        },
        bonus: {
            text: `Annule un aveuglement`
        },
        duration: {
            text: `Instantané`
        },
        area: {
            text: 'Une cible'
        }
    },
    {
        id: 'healDeafness',
        name: 'Guérison de la surdité',
        icon: 'icons/magic/life/cross-yellow-green.webp',
        description: `Ce sort guérit la surdité, qu'elle soit d'origine naturelle ou magique chez une cible. Le sort ne restaure pas les oreilles perdues, mais il les répare s'ils sont endommagés.`,
        distance: {
            type: 'touch'
        },
        bonus: {
            text: `Annule la surdité`
        },
        duration: {
            text: `Instantané`
        },
        area: {
            text: 'Une cible'
        }
    },
    {
        id: 'combatPrecognition',
        name: 'Précognition de combat',
        icon: 'icons/magic/time/clock-spinning-gold-pink.webp',
        description: `La cible gagne une prémonition contre les attaques imminentes et peut y répondre un peu plus rapidement que d'habitude, donnant un bonus de 1 à vos points d’armure. Elle prévoit aussi les défenses et les esquives de son adversaire, ce qui donne un bonus de + I aux dommages.`,
        distance: {
            type: 'touch'
        },
        bonus: {
            text: `+1 armure, + 1 dommage`
        },
        duration: {
            value: 1,
            unit: 'scène'
        },
        area: {
            text: 'Une cible'
        },
        criticalSuccess: {
            text: 'Succès remarquable : +2 armures, + 2 dommages'
        },
        actions: {
            addEffect: {
                name: `Ajouter l'effet`,
                type: 'addEffect',
                data: {
                    duration: {
                        value: 1,
                        unit: 'scène'
                    },
                    effectName: 'Précognition de combat',
                    modifiers: [
                        {
                            stat: 'damage',
                            valueFormula: `return (context.criticalSuccess ? 2 : 1);`
                        },
                        {
                            stat: 'protection',
                            valueFormula: `return (context.criticalSuccess ? 2 : 1);`
                        }
                    ]
                }
            }
        }
    }
]
