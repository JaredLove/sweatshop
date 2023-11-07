const mongoose = require('mongoose');

const guildSchema = new mongoose.Schema({
  guild: {
    key: {
      href: String,
    },
    name: String,
    id: Number,
    realm: {
      key: {
        href: String,
      },
      id: Number,
      slug: String,
    },
    faction: String, // Define faction as a string
  },
  members: [
    {
      character: {
        key: {
          href: String,
        },
        name: String,
        id: Number,
        realm: {
          key: {
            href: String,
          },
          id: Number,
          slug: String,
        },
        level: Number,
        playable_class: {
          key: {
            href: String,
          },
          id: Number,
        },
        playable_race: {
          key: {
            href: String,
          },
          id: Number,
        },
        rank: Number,
      },
    },
  ],
});

module.exports = mongoose.model('Guild', guildSchema);
