package = load_json(json_path: "./package.json")

desc 'Android: Increment versionCode and set versionName to package.json version.'
private_lane :increment_android_version do
  increment_version_code(gradle_file_path: "./android/app/build.gradle",)
  increment_version_name(gradle_file_path: "./android/app/build.gradle",version_name: package['version'])
end

desc 'iOS: Increment build number and set the version to package.json version.'
private_lane :increment_ios_version do
  increment_build_number(xcodeproj: './ios/' + package['name'] + '.xcodeproj')
  increment_version_number(xcodeproj: './ios/' + package['name'] + '.xcodeproj',version_number: package['version'])
end

desc 'Bump build numbers, and set the version to match the pacakage.json version.'
lane :bump do
  increment_android_version
  increment_ios_version
end
