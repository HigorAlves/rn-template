platform :android do

  desc "Android: Stagging app version"
  lane :staging do
    gradle(
      task: 'bundle',
      build_type: 'Staging',
      project_dir: './android/'
    )
    upload_to_play_store(track: 'beta')
    upload_to_play_store(
      track: 'alpha',
      track_promote_to: 'alpha',
      aab: './android/app/build/outputs/bundle/staging/app-staging.aab',
      metadata_path: './fastlane/android',
      skip_upload_apk: true
    )
    gradle(task: 'clean', project_dir: './android/')
  end

  desc "Android: Beta app version"
  lane :beta do
    gradle(
      task: 'bundle',
      build_type: 'Beta',
      project_dir: './android/',
		)
		supply(
      track: 'beta',
      track_promote_to: 'beta',
      aab: './android/app/build/outputs/bundle/beta/app-beta.aab',
      metadata_path: './fastlane/android',
      skip_upload_apk: true
    )
    gradle(task: 'clean', project_dir: './android/')
  end

  desc "Android: Release app version"
  lane :release do
    gradle(
      task: 'bundle',
      build_type: 'Release',
      project_dir: './android/',
      print_command: false
    )
		supply(
      track: 'production',
      track_promote_to: 'production',
      aab: './android/app/build/outputs/bundle/release/app-release.aab',
      metadata_path: './fastlane/android',
      skip_upload_apk: true
    )
    gradle(task: 'clean', project_dir: './android/')
  end
end
