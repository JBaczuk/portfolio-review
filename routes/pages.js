const express = require("express");
const axios = require("axios");
const swal = require("sweetalert");

const router = new express.Router();

const nyTimesNewsKeys = process.env.nyTimesNewsKeys;
const ticketMasterKeys = process.env.ticketMasterKeys;
const lastFMKey = process.env.lastFMKey;
const documentaryKey = process.env.documentaryKey;




router.get("/", async function (req, res, next) {
  try {
    return res.render("home.html");
  } catch (err) {
    return next(err);
  }
});


router.get("/hip-hop", async function (req, res, next) {
  try{
     return res.render("./genres/hip-hop.html");
  }  catch (err) {
     return next(err);
  }
});

router.get("/r&b", async function (req, res, next) {
  try{
     return res.render("./genres/r&b.html");
  }  catch (err) {
     return next(err);
  }
});

router.get("/pop", async function (req, res, next) {
  try{
     return res.render("./genres/pop.html");
  }  catch (err) {
     return next(err);
  }
});

router.get("/blues", async function (req, res, next) {
  try{
     return res.render("./genres/blues.html");
  }  catch (err) {
     return next(err);
  }
});

router.get("/jazz", async function (req, res, next) {
  try{
     return res.render("./genres/jazz.html");
  }  catch (err) {
     return next(err);
  }
});

router.get("/rock", async function (req, res, next) {
  try{
     return res.render("./genres/rock.html");
  }  catch (err) {
     return next(err);
  }
});

router.get("/country", async function (req, res, next) {
  try{
     return res.render("./genres/country.html");
  }  catch (err) {
     return next(err);
  }
});


router.get("/artists", async function (req, res, next) {
  try{
      const artists_input = req.query.artists_input || "beyonce";
      const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artists_input.trim()}`;
      const artists = await axios.get(url);
      
      const url2 = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artists_input.trim()}&limit=10&api_key=${lastFMKey}&format=json`;
      const albums = await axios.get(url2);

      const url3 = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artists_input.trim()}&limit=10&api_key=${lastFMKey}&format=json`;
      const topSongs = await axios.get(url3);

      const url4 = `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artists_input.trim()}&limit=5&api_key=${lastFMKey}&limit=4&format=json`;
      const similarArtists = await axios.get(url4);

      return res.render("./artists/artists.html", 
      {img:artists.data.artists[0].strArtistThumb,
       name:artists.data.artists[0].strArtist,
       born:artists.data.artists[0].intBornYear,
       style:artists.data.artists[0].strStyle,
       facebook:artists.data.artists[0].strFacebook,
       twitter:artists.data.artists[0].strTwitter,
       website:artists.data.artists[0].strWebsite,
       bio:artists.data.artists[0].strBiographyEN,
       album:albums.data.topalbums.album,
       songs:topSongs.data.toptracks.track,
       similarArtists:similarArtists.data.similarartists.artist
      });
    } catch (err) {
      return next(err);
    }
});


router.get("/songs", async function (req, res, next) {
  try{
      const song_input = req.query.song_input || "Bad Romance";
      const artist_input = req.query.art_input || "Lady Gaga";

      const url = `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${lastFMKey}&artist=${artist_input.trim()}&track=${song_input.trim()}&format=json`;
      const track_data = await axios.get(url);

      const url2 = `http://ws.audioscrobbler.com/2.0/?method=track.getsimilar&artist=${artist_input.trim()}&track=${song_input.trim()}&limit=10&api_key=${lastFMKey}&format=json`;
      const similarTracks = await axios.get(url2);

      console.log(req.body)
      let content;
      if (track_data.data.track.wiki == undefined) {
         content = "Background infomation not avaliable";
      } else {
        content = track_data.data.track.wiki.content;
      }

      return res.render("./song/song.html", 
      {name:track_data.data.track.artist.name,
       title:track_data.data.track.name,
       img:track_data.data.track.album.image[3]["#text"],
       content:content,
       url:track_data.data.track.url,
       listeners:track_data.data.track.listeners,
       playcount:track_data.data.track.playcount,
       tag1:track_data.data.track.toptags.tag[0].name,
       tag2:track_data.data.track.toptags.tag[1].name,
       tag3:track_data.data.track.toptags.tag[2].name,
       tag4:track_data.data.track.toptags.tag[3].name,
       tag5:track_data.data.track.toptags.tag[4].name,
       similarTracks:similarTracks.data.similartracks.track
      });
    } catch (err) {
      return next(err);
    }
});

router.all("/documentaries", async function (req, res, next) {
  try{    
      const choice = req.body.select || "jazz";
      const url = `http://www.omdbapi.com?apikey=${documentaryKey}&s=${choice}&page=1`;
      const documentaries = await axios.get(url);
      
      return res.render("./documentaries/documentaries.html", 
      {documentaries:documentaries.data.Search});
    } catch (err) {
      return next(err);
    }
  });


router.all("/charts", async function (req, res, next) {
  try {
      const country = req.body.selectCountry || "United States";
      
      const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&limit=10&api_key=${lastFMKey}&format=json`;
      const results = await axios.get(url);

      const url2 = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&limit=10&api_key=${lastFMKey}&format=json`;
      const results2 = await axios.get(url2);

      return res.render("./charts/charts.html", 
      {topArtists:results.data.topartists.artist,
      topSongs:results2.data.tracks.track,
      country:country
    });
    } catch (err) {
      return next(err);
    }
  });



router.get("/events", async function (req, res, next) {
  try{
      let results;
      const events_input = req.query.events_input || "Music";
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${events_input.trim()}&apikey=${ticketMasterKeys}`;
      const events = await axios.get(url);

      return res.render("./events/events.html", 
      {results:events.data._embedded.events});
    } catch (err) {
      return next(err);
    }
  });



router.get("/news", async function (req, res, next) {
  try{
      let results;
      const news_input = req.query.news_input || "Kanye west";
      const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${news_input.trim()}&api-key=${nyTimesNewsKeys}`;
      const music_news = await axios.get(url);
      
      return res.render("./news/news.html", 
      {results:music_news.data.response.docs});
    } catch (err) {
      return next(err);
    }
  });





module.exports = router;