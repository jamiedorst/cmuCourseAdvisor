"use strict";

// src for words @http://www.manythings.org/vocabulary/lists/l/
var noun = ["agape", "agent", "angel", "animation", "applause", "archangel", "autumn", "award", "backbone", "bankroll", "balloon", "bayou", "beach", "benefit", "blockbuster", "bough", "bloom", "blossom", "brain", "branch", "bells", "breeze", "brook", "bubbles", "build", "butterfly", "brightness", "cake", "candy", "candle", "castle", "cathedral", "carnival", "celebrant", "celebration", "chakra", "champagne", "charm", "cheer", "cherub", "cherubim", "chime", "chocolate", "climb", "coast", "coffee", "comforter", "concert", "cooperative", "cornerstone", "corsage", "creek", "cub", "curio", "dawn", "delicacy", "deity", "diamond", "dream", "dynamo", "Earth", "electricity", "embrace", "emerald", "energy", "estate", "estuary", "euphony", "evening", "dress", "fawn", "flower", "festival", "fete", "flagship", "food", "forest", "foundation", "fount", "fountain", "fruit", "gala", "galleon", "gallery", "garden", "gem", "generator", "gift", "God", "gold", "good", "gravy", "greeting", "egg", "grass", "grass", "greeting", "harp", "heart", "home", "hospital", "hug", "ice", "invention", "invitation", "kitten", "kitty", "lamb", "laugh", "laughter", "lei", "library", "lift", "light", "limo", "livewire", "lotus", "mansion", "meteor", "shower", "medal", "monument", "moon", "motor", "mountain", "museum", "music", "nestling", "novelty", "nugget", "oasis", "object", "orchid", "outer", "space", "ovation", "park", "party", "peach", "pearl", "plum", "poetry", "pond", "popcorn", "positive", "present", "prize", "promotion", "puppy", "purse", "rainbow", "river", "rivulet", "rose", "ruby", "salute", "salutation", "sapphire", "sculpture", "secret", "seraph", "shelter", "shine", "sky", "smile", "smoothie", "snow", "spring", "sprite", "sprout", "star", "statue", "strawberry", "stream", "summer", "summit", "sun", "throne", "tool", "team", "treasure", "tree", "trophy", "trump", "card", "tuxedo", "universe", "vegetables", "village", "water", "waterfall", "whirlpool", "world"];
var nounsize = noun.length;

var adj = ["adaptable", "adventurous", "affable", "affectionate", "agreeable", "ambitious", "amiable", "amicable", "amusing", "brave", "bright", "broad-minded", "calm", "careful", "charming", "communicative", "compassionate", "conscientious", "considerate", "convivial", "courageous", "courteous", "creative", "decisive", "determined", "diligent", "diplomatic", "dynamic", "easygoing", "emotional", "energetic", "enthusiastic", "exuberant", "fair-minded", "faithful", "fearless", "forceful", "frank", "friendly", "funny", "generous", "gentle", "good", "gregarious", "hard-working", "helpful", "honest", "humorous", "imaginative", "impartial", "independent", "intellectual", "intelligent", "intuitive", "inventive", "kind", "loving", "loyal", "modest", "neat", "nice", "optimistic", "passionate", "patient", "persistent", "pioneering", "philosophical", "placid", "plucky", "polite", "powerful", "practical", "pro-active", "quick-witted", "quiet", "rational", "reliable", "reserved", "resourceful", "self-confident", "self-disciplined", "sensible", "sensitive", "sincere", "sociable", "straightforward", "sympathetic", "thoughtful", "tidy", "tough", "unassuming", "understanding", "versatile", "warmhearted", "willing", "witty"];
var adjsize = adj.length;

function get_random_name() {
  var name = "";
  name += adj[Math.floor(Math.random() * adjsize + 1)];
  name += " ";
  name += noun[Math.floor(Math.random() * nounsize + 1)];
  name += " ";
  name += noun[Math.floor(Math.random() * nounsize + 1)];

  return name;
}