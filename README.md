My solutions to https://typehero.dev/aot-2023 . 

## Plans
- [ ] Study other solutions and see if I can improve mine and review gaps, note differences.

## Solutions to study:
### https://github.com/TkDodo/aot-2023
- 03: Uses `TSomething` for longer readable generic type variable names. 
- 05: Used `ReadonlyArray`
- 12: TkDodo's algorithm is simpler.
- 13: Indeed my method was brute-force. I used a combination of addition and recursion to get a full list. I guess the method I thought of was similar to what others came up with. The use of Acc[number] is simpler, and the use of `Exclude` is cleaner. The use of recursion is restricted to only the `Fill`, which is simpler and easier to read.
- 14: I've got a cleaner solution here :)
- 16: `Predicate<T> extends infer Result` as a way to save a variable. Great use of Mapped types to do a search for Santa on the rows then retrieve it via `[number]`, relying on `never` being not returned in the results. Find column method is the same algorithm.
- 17: This solution is much simpler and cleaner than mine. I can definitely simplify my solution further.

### Others not yet studied
- https://github.com/jfet97/aot-2023

# Changelog

## 2024-01-09
- Study some more TkDodo solutions
- Realized I didn't update my solution for 18. Updated it.

## 2024-01-07
- Add some plans and changelog
- Add some notes from reading first 5 TkDodo solutions.

## 2023-01-06

- Finished on Jan 6 2024.

# References
- Follow https://keepachangelog.com/en/1.1.0/ for a rough changelog format.