# action delete artifact

This action delete an Actions Artifact in a workflow run.

## Inputs

### `artifactName`

**Required** The artifact name you want to delete.


## Example usage

```yaml
- name: Upload artifact
  uses: actions/upload-artifact@v4
  with:
    name: test_file
    path: file1.txt
    
    
- name: Delete artifact
  uses: nicennnnnnnlee/action-delete-artifact@v0.0.1
  with:
    name: test_file
```
