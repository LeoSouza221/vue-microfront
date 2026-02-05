export async function loadRemoteComponent(remoteEntryUrl: string, exposedName: string) {
  // Ex: remoteEntryUrl = 'http://localhost:5173/remoteEntry.js'
  // exposedName = './HeaderApp'
  const remoteModule = await import(/* @vite-ignore */ remoteEntryUrl)
  // inicializa container se existir
  if (remoteModule.init) {
    try {
      await remoteModule.init({})
    } catch (e) {
      // init pode falhar se já inicializado ou se não usa share scope
      console.warn('remote init:', e)
    }
  }
  const factory = await remoteModule.get(exposedName)
  const Module = factory()
  return Module.default || Module
}