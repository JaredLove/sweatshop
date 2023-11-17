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
    faction: String,
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
        additionalData: {
          gender: String,
          faction: String,
          activeSpec: String,
          assets: [
            {
              key: String,
              value: String,
            },
          ],
        },
      },
    },
  ],
});


module.exports = mongoose.model('Guild', guildSchema);
