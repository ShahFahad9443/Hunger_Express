# Automatic Linting Setup

## Overview
This project is configured to automatically fix linting errors before each commit using Husky pre-commit hooks.

## How It Works

### Pre-Commit Hook
When you run `git commit`, the `.husky/pre-commit` hook automatically:

1. **Runs `npm run lint:fix`** - Automatically fixes all auto-fixable linting errors
2. **Stages fixed files** - Adds the fixed files back to the staging area
3. **Runs `npm run lint`** - Verifies no remaining errors exist
4. **Blocks commit if errors remain** - If there are unfixable errors, the commit is blocked

### What Gets Fixed Automatically

The following linting issues are automatically fixed:
- Unused variables (removed)
- Unused imports (removed)
- Formatting issues
- Simple syntax errors
- Unnecessary code (like useless try/catch)

### What Requires Manual Fix

Some issues cannot be auto-fixed and require manual attention:
- Missing PropTypes (already added to components)
- Complex logic errors
- Missing dependencies in useEffect (warnings, not errors)

## Manual Commands

### Fix linting errors manually:
```bash
npm run lint:fix
```

### Check for linting errors:
```bash
npm run lint
```

## Fixed Issues

All current linting errors have been fixed:
- ✅ Removed unused `next` parameter in authController
- ✅ Removed unused `protect` import in ratingRoutes
- ✅ Removed useless try/catch wrapper in refreshToken
- ✅ Added PropTypes to ErrorMessage, LoadingSpinner, RouteWrapper
- ✅ Removed unused `user` variable in Checkout
- ✅ Fixed useEffect dependency warnings

## Troubleshooting

### If commit is blocked:
1. Check the error message in the terminal
2. Fix the issue manually
3. Run `npm run lint:fix` to auto-fix what you can
4. Try committing again

### If pre-commit hook doesn't run:
1. Make sure Husky is installed: `npm install`
2. Verify hook exists: `cat .husky/pre-commit`
3. Make sure hook is executable: `chmod +x .husky/pre-commit`

### To skip the hook (not recommended):
```bash
git commit --no-verify
```

## Best Practices

1. **Don't skip hooks** - They help maintain code quality
2. **Fix errors immediately** - Don't let them accumulate
3. **Review auto-fixes** - Sometimes auto-fixes need manual adjustment
4. **Keep dependencies updated** - Run `npm run lint` regularly

