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

*Then* I'd start exploring ways to hijack the link and do the Ajax-thing where
the server only returns a chunk of JSON and... sorry, I fell asleep there. You
were saying?

I can't tell you how many times it's never got any further than the first
version because _it already works great_. Few times have there been any appetite
for spending more time on a feature that is working great.

Especially when you start digging through the rabbit-holes of back-buttons that
no longer works as expected and title tags that doesn't match the page they're
on. Or bookmarking a link to a specific filter, only to find out that the page
has no idea what that means on the first run. Yes, you can code around all that
with JavaScript, but that's not my idea of fun.

Adding **TurboLinks** to a setup like the above, effectively takes care of all
of those problems transparently, and if the script doesn't load for someone,
they get the original lo-fi version which still works.

That's just TurboLinks - I'm very curious to see what adding **Stimulus** to
the mix will let me do...

