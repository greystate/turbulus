# Turbulus

I've used TurboLinks on a couple of smaller projects,
but I'd really like to take the combo of [TurboLinks][] and [Stimulus][] for
a spin and see if I'd be able to loop them in on some of our Umbraco projects.

I'm a big fan of building stuff that works, before trying to make it fancy,
so these are right up my alley :)


[TurboLinks]: https://github.com/turbolinks/turbolinks
[Stimulus]: https://stimulusjs.org

* * *

## First experiment: A movie list

Should come as no surprise to anyone who've been taught by me, or have been to
a talk of mine that I'll try something with movies :)

- A single page that presents a list of movies.
- A filter of some sort (e.g. a row of letters for alphabetic filtering)
- Clicking a filter reloads the page showing only the filtered results

I always do this the simplest way I know first, i.e. the filter adds a
querystring to the URL that the server then interprets when rendering the page.

Adding **TurboLinks** to a setup like that, effectively takes out
the re-rendering in the browser and makes it feel like an instant filtering.

Curious to see what adding **Stimulus** to the mix will let me do...

