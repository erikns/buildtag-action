# Build tag action

Simple Action to generate a "build tag" based on workflow variables. For use in tags,
Docker images,  etc.

The Action uses workflow variables from the context and runs them through a tag generation
routine based on a template, yielding a build tag as a result.

## Inputs

### `template`
_Required: yes_

The tag template. Elements are enclosed in  curly brackets `{ }`. Valid elements are:
* `runId`: From `GITHUB_RUN_ID`
* `runNumber`: From `GITHUB_RUN_NUMBER`
* `sha`: From `GITHUB_SHA`
* `shortSha`: From `GITHUB_SHA`, but truncated to `shortShaLength`
* `time`: Current time. The format used can be specified with the input `timeFormat`.
* `refName`: From `GITHUB_REF_NAME`

For more information around the values, see
[docs](https://docs.github.com/en/actions/learn-github-actions/environment-variables)

Valid example format: `{time}-{runId}-{sha}`

### `timeFormat`
_Required: no. Default: YYYYMMDDHHmm_

Time format specifier follows that of [`moment.js`](https://momentjs.com/docs/#/displaying/format/)

### `shortShaLength`
_Required: no. Default: 7_

When using `shortSha`, sets the number of characters of the full SHA to use.

## Outputs

### `tag`
The resulting generated tag, ready for use.

## Example usage

```yaml
name: example
on: [push]
jobs:
  generate_tag:
    runs-on: ubuntu-latest
    steps:
    - name: Generate build tag
      id: build_tag
      uses: erikns/buildtag-action@v1
      with:
        template: "{time}-{runId}-{shortSha}"
        timeFormat: "YYYY-MM-DD-HHmm"
        shortShaLength: 8
    - name: Use build tag
      run: echo ${{ steps.build_tag.outputs.tag }}
```

## TODO

* Add unit tests

## License

Simple, permissive MIT License.
