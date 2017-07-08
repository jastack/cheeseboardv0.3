### README

For now this is going to be where I document my steps in setting up CheeseboardMobile.
My first challenge was running into "No bundle present" when setting up React Native for the first time. I discovered this is a issue with the most current version of RN, so I installed RN 0.45 and it seems to work better.

```bash
react-native init Cheeseboard --version react-native@0.45.1
```

The next thing I did was import all the components I have previously created in older versions of the Cheeseboard app. Then I set up react-native-vector-icons.
